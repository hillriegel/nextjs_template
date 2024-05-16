'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import fetchData from './fetchData';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import {Item, UpdateState, APIResponse, PaginationBarProps} from './types';

export default function PaginationBar({items, updateItemsDisplayed, setLoading}: PaginationBarProps) {
    const [numItems, setNumItems] = useState(0);
    const [numPages, setNumPages] = useState(0);


    const handleGet = useCallback((place: string) => {
        let pn = items.pageNumber;
        switch (place) {
            case 'first':
                pn = 1;
                break;
            case 'prev':
                if (pn > 1) pn--;
                break;
            case 'next':
                if (pn < numPages) pn++;
                break;
            case 'last':
                pn = numPages;
                break;
        }

        setLoading(true);
        fetchData(pn, 20)
            .then((result: APIResponse) => {
                updateItemsDisplayed({ pageNumber: pn, itemsToDisplay: result.data });
                setNumItems(result.totalItems);
                setNumPages(result.totalPages);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [items.pageNumber, numPages, updateItemsDisplayed, setLoading]);

    return (
        <div>
        <div style={{color: '#fff', marginTop: '20px'}}>

            Showing page {items.pageNumber} of {numPages} of {numItems} items
        </div>
        <div style={{color: '#fff', marginTop: '20px'}}>
            <Button onClick={() => handleGet('first')} variant="contained"><FirstPageIcon /></Button>
            <Button onClick={() => handleGet('prev')} variant="contained">Prev</Button>
            <Button onClick={() => handleGet('next')} variant="contained">Next</Button>
            <Button onClick={() => handleGet('last')} variant="contained"><LastPageIcon /></Button>
        </div>
        </div>
    );
}

