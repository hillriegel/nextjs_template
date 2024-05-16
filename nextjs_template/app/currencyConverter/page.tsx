'use client'

import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const now = new Date();

export default function CurrencyConverter() {
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [amountFrom, setAmountFrom] = useState('0.00');
  const [amountTo, setAmountTo] = useState('0.00');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [data, setData] = useState<string[]>([]);

  // List of currency codes
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
    });
  }, []);

  // Debounced API call handler
  const fetchExchangeRate = useCallback(debounce((currencyFrom, currencyTo, amountFrom) => {
    axios.get('https://currency-exchange.p.rapidapi.com/exchange', {
      headers: {
          'X-RapidAPI-Key': '7f84064561msh666eb6ace3981d9p1f93bajsn975a9a63b0e5',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        },
      params: {
        from: currencyFrom,
        to: currencyTo,
        q: amountFrom
      }
    }).then(response => {
      let td = parseInt(amountFrom, 10);
      setAmountTo((response.data * td).toString());
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, 500), []);

  // Effect to call the debounced API call handler
  useEffect(() => {
    fetchExchangeRate(currencyFrom, currencyTo, amountFrom);
  }, [currencyFrom, currencyTo, amountFrom, fetchExchangeRate]);

  // Handle amount change
  const handleAmountFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmountFrom(event.target.value);
  };

  // Handle currency change (from)
  const handleChangeFrom = (event: SelectChangeEvent) => {
    setCurrencyFrom(event.target.value as string);
  };

  // Handle currency change (to)
  const handleChangeTo = (event: SelectChangeEvent) => {
    setCurrencyTo(event.target.value as string);
  };

  return (
    <main className="flex  flex-col">
      <div className="items-center justify-between" style={{marginTop: '10px', width: '100%', textAlign: 'center', color: '#ffffff'}}>
        {now.toDateString()}
      </div>
      <div className="min-h-screen flex-1" style={{padding: '20px', width: '100%'}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card style={{backgroundColor: '#fff', width: '80%'}}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" value={amountFrom} onChange={handleAmountFromChange} />
                  </Grid>
                  <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="currencyFrom"
                          value={currencyFrom}
                          label="Currency"
                          onChange={handleChangeFrom}
                        >
                          {data.map((curr, index) => (
                            <MenuItem key={index} value={curr}>{curr}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card style={{backgroundColor: '#fff', width: '80%'}}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" value={amountTo} />
                  </Grid>
                  <Grid item>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="currencyTo"
                          value={currencyTo}
                          label="Currency"
                          onChange={handleChangeTo}
                        >
                          {data.map((curr, index) => (
                            <MenuItem key={index} value={curr}>{curr}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
