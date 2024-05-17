'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './demo.css';
import SelectMenu from './SelectMenu';

import Grid from '@mui/material/Grid';

export default function CssDemo() {
    
    return (
      <div>
              <h1>CSS Demo</h1>
          <main>
              <section className="hero">
                  <button className="btn btn-primary">Get Started</button>
              </section>
              <section className="features">
                  <div className="feature">
                      <h3>Feature 1</h3>
                      <p>This is a description of feature 1.</p>
                  </div>
                  <div className="feature">
                      <h3>Feature 2</h3>
                      <p>This is a description of feature 2.</p>
                  </div>
                  <div className="feature">
                      <h3>Feature 3</h3>
                      <p>This is a description of feature 3.</p>
                  </div>
              </section>

              
              <section className="cards">
                  <div className="card">
                      <h3>Card 1</h3>
                      <p>This is a description of card 1.</p>
                  </div>
                  <div className="card">
                      <h3>Card 2</h3>
                      <p>This is a description of card 2.</p>
                  </div>
                  <div className="card">
                      <h3>Card 3</h3>
                      <p>This is a description of card 3.</p>
                  </div>
              </section>

                <div style={{height: '400px', padding: '20px'}}>
                    <h2> Custom Select Dropdown</h2>
                    <br />
                    <section>
                        <SelectMenu />
                    </section>
              </div>
          </main>
    </div>
      
    );
};
