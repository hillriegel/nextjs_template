
'use client'
import dynamic from 'next/dynamic';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function Homebody() {


    return (
        <Box>
            <Grid container spacing={2} style={{color: "#ffffff"}}>
                <Grid item>
                <p>
                    This is a basic React/Next.js app set up to demonstrate creating app functionality.
                </p>
                <p>
                    It includes Material-ui, lodash (for debouncing), Axios (for API calls),
                </p>
                </Grid>
            </Grid>

        </Box>
    )
}

