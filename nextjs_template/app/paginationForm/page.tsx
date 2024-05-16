'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import HomeBody from '@/app/homeBody';
import ItemsDisplay from './ItemsDisplay';
import PaginationBar from './PaginationBar';

const Pagination = () => {

  const [items, setItems] = useState (
      {
        pageNumber: 1,
        itemsToDisplay: [1,2,3]
      }
  )

  const updateItemsDisplayed = (newState) => {
    setItems(prevState => ({
        ...prevState,
        ...newState
    }));
  };



/**
 * Simulates fetching paginated data from an API.
 * @param {number} currentPage - The current page number to fetch data for.
 * @param {number} itemsPerPage - The number of items to fetch per page.
 * @returns {Promise<Object>} A promise that resolves to an object containing the data for the current page.
 */



  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{marginTop: '50px'}}>
     <div style={{padding: '24px'}}>
            <ItemsDisplay items={items.itemsToDisplay} />
            <PaginationBar items={items} updateItemsDisplayed={updateItemsDisplayed} />
          </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         
        </div>
      </div>

    </main>
  );
}

export default Pagination; 
