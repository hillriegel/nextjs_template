
'use client'

import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';


export default function Homebody() {


    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item>
                    <Image src="/images/grise_bw.png" alt="photo of Grise" width="300" height="600"/>
                </Grid>
                <Grid item>
                    <h1>A Collection of Exercises and Ideas </h1>
                <p>
                    This is a basic React/Next.js app set up to demonstrate creating app functionality.
                </p>
                <p>
                    It includes Material-ui, lodash (for debouncing), Axios (for API calls),
                </p>
                <p>
                    The repository of this entire project and all of its examples can be retrieved from:
                   </p>
                </Grid>
            </Grid>

        </Box>
    )
}

