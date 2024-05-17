'use client'

import React, {useState, useEffect} from 'react';
import SearchField from './SearchField';
import OptionsWindow from './OptionsWindow';
import './demo.css';
import FetchMovies from './FetchMovieOptions';


export default function SearchBar() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isWindowOpen, setIsWindowOpen] = useState(false);
    const [genres, setGenres] = useState([]);
    const [showX, setShowX] =  useState(false);

    useEffect(() => {
        FetchMovies().then(data => {
            setGenres(data.genres); // Assume data.genres contains the array you need
        }).catch(error => {
            console.error("Error fetching genres:", error);
        });
    }, [genres]);

    const handleSelectItem = (item: string) => {
        setSelectedOption(item);
        setIsWindowOpen(!isWindowOpen); // Toggle visibility based on current state
        setShowX(true);
    };

    const clearSelect = () => {
        setSelectedOption(null);
        setIsWindowOpen(false); // Close the winadow when selection is cleared
        setShowX(false);
    };


    useEffect(() => {
        // Additional actions to perform after genres update
    }, [genres]);

    return (
        <>
            {genres.length > 0 ? (
                <>
                    <SearchField 
                        selectedOption={selectedOption!}
                        clearSelect={clearSelect} 
                        toggleWindowDisplay={() => setIsWindowOpen(!isWindowOpen)}
                        windowIsOpen={isWindowOpen}
                        showX={showX}
                    />
                    {isWindowOpen ? (
                    <OptionsWindow 
                        options={genres}
                        setSelectedOption={handleSelectItem}
                    />
                ) : (<></>)}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
