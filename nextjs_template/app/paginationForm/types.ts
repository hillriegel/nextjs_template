
    
export interface Item {
    id: number;
    name: string;
}

export interface UpdateState {
    pageNumber?: number;
    itemsToDisplay?: Item[];
}

export interface APIResponse {
    currentPage: number;
    data: Item[];
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export interface PaginationBarProps {
    items: {
        pageNumber: number;
        itemsToDisplay: Item[];
        
    };
    setLoading: Function;
    updateItemsDisplayed: (newState: UpdateState) => void; 
}