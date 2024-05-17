'use client'

import React, {useState} from 'react';
import './demo.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';



export default function SearchField({selectedOption, clearSelect, toggleWindowDisplay, windowIsOpen, showX} : {selectedOption: string, clearSelect: ()=> void, toggleWindowDisplay: ()=> void, windowIsOpen: boolean, showX: boolean}) {

    return (
        <div className="search-field" onClick={(()=> toggleWindowDisplay())}>
            <div className="searchfield-text">{selectedOption}</div>
            {showX ? (
                <div className="searchfield-close"
                    onClick={(() => clearSelect())}>
                     <CloseIcon  style={{fontSize: '1.1em'}} />
                </div>
                ) : (<></>
                )
            }
            

            <div className="searchfield-arrow"
                style={{ transform: windowIsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} >
                    <KeyboardArrowDownIcon />
                </div>
        </div>
    )
}