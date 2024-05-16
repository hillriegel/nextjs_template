'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Paper,
  Button,
  TextField
} from '@mui/material'
import Grid from '@mui/material/Grid';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    interface Errors {
      [key: string]: string;
  }
  
    const [errors, setErrors] = useState<Errors>({});

    const validateForm = () => {
        //clear the errors first
        setErrors({});
        let formIsValid = true;
        let errors = {};

        if (!formData.username) {
            formIsValid = false;
            setErrors(prevErrors => {
              return { ...prevErrors, username: 'Username cannot be empty' };
            });
        }

        if (!formData.email) {
            formIsValid = false;
            setErrors(prevErrors => {
              return { ...prevErrors, email: 'Email cannot be empty' };
            });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            setErrors(prevErrors => {
              return { ...prevErrors, email: 'Email format is invalid' };
            });
        }

        if (!formData.password) {
            formIsValid = false;
            setErrors(prevErrors => {
              return { ...prevErrors, password: 'Password cannot be empty' };
            });
        } else if (formData.password.length < 6) {
            formIsValid = false;
            setErrors(prevErrors => {
              return { ...prevErrors, password: 'Password must be at least 6 characters' };
            });
        }
        return formIsValid;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Form is valid:', formData);
            // Submit your form logic here
        }
    };

    return (
      <main className="flex  flex-col">
         <div className="min-h-screen flex-1" style={{padding: '20px', width: '100%'}}>
          <br />
          <Paper style={{padding: '20px'}}>
          <h1><b>Sample Registration Form</b></h1>
        
            <div style={{marginTop: '40px'}}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                      <Grid item xs={3} md={2}>
                        <label>Username:</label></Grid>
                      <Grid item xs={9} md={10}>
                        <TextField  
                          name="username" 
                          value={formData.username} 
                          onChange={handleChange}
                          error={!!errors.username}
                          helperText={errors.username || ''}
                        />
                      </Grid>
                  
              
                      <Grid item xs={3} md={2}>  
                       <label>Email:</label></Grid>
                      <Grid item xs={9} md={10}>  
                        <TextField 
                          type="email" name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          error={!!errors.email}
                          helperText={errors.email || ''}
                        />
                      </Grid>

                    
             
                      <Grid item xs={3} md={2}><label>Password:</label></Grid>
                      <Grid item xs={9} md={10}>
                        <TextField 
                          type="password"  
                          name="password" 
                          value={formData.password} onChange={handleChange} 
                          error={!!errors.password}
                          helperText={errors.password || ''}
                        />
                        </Grid>
                     
            
                      <Grid item xs={3} md={2}></Grid>
                      <Grid item xs={9} md={10}><Button type="submit" variant="outlined"> Register</Button>
                      </Grid>
              </Grid>
              <br /><br />
            </form>
            </div>
        </Paper>
        </div>
      </main>
    );
};

export default RegistrationForm;
