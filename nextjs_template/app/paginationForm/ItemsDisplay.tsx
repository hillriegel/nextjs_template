'use client'
import React from 'react';

interface Item {
    id: number;
    name: string;
}

interface ItemsDisplayProps {
    items: Item[];  // This specifies that `items` is an array of `Item` objects
}


export default function ItemsDisplay({ items }: ItemsDisplayProps) {
    return (
        <div style={{ color: '#fff' }}>
            {items.length > 0 ? (
                items.map((item: Item, index: number) => (
                    // Ensure that each item has an `id` or that `index` is a safe fallback
                    <div key={item.id || index}>
                        {/* Safely handle rendering `item.name` or fallback to `item` */}
                        {item.name || "No name available"}
                    </div>
                ))
            ) : (
                // Display a more informative message if items are empty
                <p>No items available. Please check back later.</p>
            )}
        </div>
    );
}