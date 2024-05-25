'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './demo.css';
import SelectMenu from './SelectMenu';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import HeadphonesIcon from '@mui/icons-material/Headphones';
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
                      <h3>Griseconica Remixed</h3>
                      <br />
                      <iframe src="https://open.spotify.com/embed/album/0JkQJUi8MJFNLG7AvpXBeL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>Released in April, 2024, <i>Griseconica Remixed</i> is a collection of dance mixes (120-128 bpm) of tracks
                      from the album <i>Griseconica</i>.</p>
                      <p><b>cover art by Grisecon</b></p>
                  </div>
                  <div className="feature">
                      <h3>Griseconica</h3>
                      <br />
                      <iframe src="https://open.spotify.com/embed/album/0xuPPPmCs1gClEtGP84pAI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>This album is centered around a track called "Behold." "Behold" itself was spawned from "Grass / Ocean's Poem"
                        a track that has been shazam-ed around the world tens of thousands of times.
                        </p>
                        <p> The album also features a sort of sibling track
                        called "Tight Monolith / Song of Myself." Both tracks feature spoken word readings of excerpts from the poetry of Walt Whitman.
                      </p>
                      <p><b>Cover art by Michael Koehler</b></p>
                  </div>
                  <div className="feature">
                      <h3>Backseat Driving</h3>
                      <br />
                      <iframe  src="https://open.spotify.com/embed/album/0ody1YxJZqNqTMNSqG3vNy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      <p>The dream that we would have FSD and be able to enjoy a little fun time in the backseat of our car while we 
                        took a trip down the PCH seems forever out of reach.
                        </p><p>It's the inspiration for this album, a road trip album, and a nod
                        to the AOR rock of the late 70s (Donald Fagan's "The Nightfly" in particular).
                        </p>
                        <p><b>cover art by Niko</b></p>
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

                <div style={{height: '800px', padding: '20px'}}>
                    <h1> Custom Select Dropdown</h1>
                    <p>This was an interview test question to create a custom select menu dropdown from scratch. I found this challenging
                        initially (because I hate coding under pressure and with someone watching) because I have used material-ui for years
                        and a proprietary design system. Whenever I needed a select menu I just imported it.
                    </p>
                    <p>There are many improvements that could be made to this such as truncating menu options that are too long. The time limit
                        for this exercise was a little over 2 hours.
                    </p>
                    <p>This menu uses Fetch to grab a list of movie genres from a public API.</p>
                    <br />
                    <section>
                        <SelectMenu />
                    </section>
              </div>
          </main>
    </div>
      
    );
};
