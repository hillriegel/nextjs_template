'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CurrencyCodesTo() {
    const [data, setData] = useState<string[]>([]);
    const [currencyTo, setCurrencyTo] = useState('USD');
  
    useEffect(() => {
      axios.get('https://currency-exchange.p.rapidapi.com/listquotes', {
        headers: {
            'X-RapidAPI-Key': '7f84064561msh666eb6ace3981d9p1f93bajsn975a9a63b0e5',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
          }
      }).then(response => {
        setData(response.data);
      }).catch(error => {
        console.error('Error fetching data:', error);
        // Handle errors here, possibly setting an error state to show in the UI
      });
    }, []);
  
    const handleChange = (event: SelectChangeEvent) => {
      setCurrencyTo(event.target.value as string);
    };
  
    if (!data.length) return <div>Loading...</div>;
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="currencyTo"
            value={currencyTo}
            label="Currency"
            onChange={handleChange}
          >
            {data.map((curr, index) => (
              <MenuItem key={index} value={curr}>{curr}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }

