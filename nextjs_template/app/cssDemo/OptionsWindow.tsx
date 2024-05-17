'use client'

import React from 'react';
import './demo.css';

interface OptionsWindowProps {
    options: Options;
    setSelectedOption: (item: string) => void;  // Correct typing for a setter function
}

interface Option {
    id: string;
    name: string;
}

type Options = Option[];



export default function OptionsWindow({ options, setSelectedOption }: OptionsWindowProps) {
    return (
        <div id="OptionsWindow" className="options-window">
            <ul className="menu-list">
                {options.map(item => (
                    <li className="menu-option" 
                        key={item.id} value={item.name} 
                        onClick={(() => setSelectedOption(item.name))}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}