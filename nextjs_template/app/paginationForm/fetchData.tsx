
import {Item, APIResponse} from './types';

export default function fetchData(currentPage: number, itemsPerPage: number): Promise<APIResponse> {

    // Mock data array with 1000 items
    const allItems = Array.from({ length: 1000 }, (v, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        description: `Description of item ${i + 1}`
    }));
  
    return new Promise<APIResponse>((resolve, reject) => {
        // Simulate a delay to mimic network request
        setTimeout(() => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const pageItems = allItems.slice(startIndex, endIndex);
  
            resolve({
                currentPage: currentPage,
                itemsPerPage: itemsPerPage,
                totalItems: allItems.length,
                totalPages: Math.ceil(allItems.length / itemsPerPage),
                data: pageItems,
            });
        }, 1000); // Simulate network latency with 1 second delay
    })
  }
