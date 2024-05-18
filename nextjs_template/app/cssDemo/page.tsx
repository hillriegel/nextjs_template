'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './demo.css';
import SelectMenu from './SelectMenu';

import Grid from '@mui/material/Grid';

export default function CssDemo() {



    type FlexDirection = 'row' | 'column';
    type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

    const [alignment, setAlignment] = useState<AlignItems>('flex-start');
    const [direction, setDirection] = useState<FlexDirection>('row');

    return (
      <div>
              <h1>CSS Demo</h1>
          <main>


              
              <br />
              <div style={{margin: '20px'}}>
                <h1>Example of FlexBox styling</h1>
                <br />
                <div className="css-content">
                height: 400px;<br />
                display: flex;<br />
                padding: 20px;<br />
                 margin: 20px;<br />
                justify-content: center;<br />
                align-content: flex-start;<br />
                border-radius: 10px;<br />
              </div>
              <br />
            <div className="features-buttons">
                <i>Align items affects vertical placement</i><br />
                <button className="btn btn-primary" onClick={()=>setAlignment('flex-start')}>align-items: flex-start</button>
                <button className="btn btn-primary" onClick={()=>setAlignment('flex-end')}>align-items: flex-end</button>
                <button className="btn btn-primary" onClick={()=>setAlignment('center')}>align-items: center</button>
                <button className="btn btn-primary" onClick={()=>setAlignment('baseline')}>align-items: baseline</button>
                <button className="btn btn-primary" onClick={()=>setAlignment('stretch')}>align-items: stretch</button>
                <br />
                <i>Flex-Direction: row or column</i><br />
                <button className="btn btn-primary" onClick={()=>setDirection('row')}>flex-direction: row</button>
                <button className="btn btn-primary" onClick={()=>setDirection('column')}>flex-direction: column</button>
    
            </div>
              </div>
              <section className="features" style={{ alignItems: alignment, flexDirection: direction}}>
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

              <br />
              <div style={{margin: '20px'}}>
              <h1>Example of a Grid</h1>
              <br />
              <div className="css-content">
                display: grid;<br />
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              </div>
              </div>
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
