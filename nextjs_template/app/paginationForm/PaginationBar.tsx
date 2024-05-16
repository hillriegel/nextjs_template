'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import fetchData from './fetchData';

interface PaginationBarProps {
    items: {
        pageNumber: number;
        itemsToDisplay: number[];
    }
    updateItemsDisplayed: (newState: any) => void; 
  }

export default function PaginationBar({items, updateItemsDisplayed}: PaginationBarProps) {

    const [numItems, setNumItems] = useState(0);
    const [numPages, setNumPages] = useState(0);



    const handleGet = (place: String) => {
        let pn = 0;
        switch (place) {
            case 'first':
                pn = 1;
                updateItemsDisplayed({ pageNumber: 1 });
                break;

            case 'prev':
                console.log('handleGet prev called')
                if (items.pageNumber !== 1) {
                    pn = items.pageNumber -1;
                    console.log('pn = ', pn);
                    updateItemsDisplayed({pageNumber: pn});
                } else {
                    pn = 1;
                }
                break;

            case 'next':
                if (items.pageNumber !== numPages) {
                    pn = items.pageNumber + 1;
                    updateItemsDisplayed({pageNumber: pn});
                } else {
                    pn = numPages;
                }


                break;
            case 'last':
                updateItemsDisplayed({ pageNumber: numPages });
                pn = numPages;
                break;
            default:
                break;
        }
       
        console.log('calling fetchData with pn of ', pn);
        fetchData(pn,20)
            .then((result) => {
                updateItemsDisplayed({ itemsToDisplay: result.data,})
                setNumItems(result.totalItems);
                setNumPages(result.totalPages);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });;
    };

    const handleGetLast = () => {
        updateItemsDisplayed({pageNumber: 50});
        
        fetchData(50,20)
        .then((result) => {
            // Update state with the result
            updateItemsDisplayed({itemsToDisplay: result.data,});
          })
          .catch((error) => {
            // Handle any errors
            console.error('Error fetching data:', error);
          });
    };

    return (
        <div>
        <div style={{color: '#fff', marginTop: '20px'}}>
            Showing page {items.pageNumber} of {numPages} of {numItems} items
        </div>
        <div style={{color: '#fff', marginTop: '20px'}}>
            <Button onClick={() => handleGet('first')} variant="contained">First</Button>
            <Button onClick={() => handleGet('prev')} variant="contained">Prev</Button>
            <Button onClick={() => handleGet('next')} variant="contained">Next</Button>
            <Button onClick={() => handleGet('last')} variant="contained">Last</Button>
        </div>
        </div>
    );
}

