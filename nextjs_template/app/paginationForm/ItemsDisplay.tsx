'use client'
import React, {useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
interface Item {
    id: number;
    name: string;
}

interface ItemsDisplayProps {
    items: Item[];  // This specifies that `items` is an array of `Item` objects
    loading: boolean;
}


export default function ItemsDisplay({ items, loading }: ItemsDisplayProps) {



    return (
        <Card style={{
            color: '#444',
            width: '80%',
            padding: '20px',
            height: '550px',
            position: 'relative'
        }}>
            {loading ?
             <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}> <CircularProgress /></div> :
             items.length > 0 ? (
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
        </Card>
    );
}