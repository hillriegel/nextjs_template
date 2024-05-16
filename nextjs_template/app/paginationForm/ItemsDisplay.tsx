'use client'
import React from 'react';

function ItemsDisplay({ items }) {
    return (
        <div style={{ color: '#fff' }}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    // Ensure that each item has an `id` or that `index` is a safe fallback
                    <div key={item.id || index}>
                        {/* Safely handle rendering `item.name` or fallback to `item` */}
                        {item.name || item}
                    </div>
                ))
            ) : (
                // Display a more informative message if items are empty
                <p>No items available. Please check back later.</p>
            )}
        </div>
    );
}

export default ItemsDisplay;
