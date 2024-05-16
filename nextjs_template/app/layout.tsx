'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import IconMenu from "@/app/leftMenu";
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HomeIcon from '@mui/icons-material/Home';
import ViewStream from '@mui/icons-material/ViewStream';
import Link from 'next/link';
import PagesIcon from '@mui/icons-material/Pages';
import Footer from './footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen: boolean) => () => {
  setOpen(newOpen);
};

const DrawerList = (
  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
    <List>

        <ListItem key={"home"} disablePadding>
          <Link href="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem key={"currencyEx"} disablePadding>
          <Link href="/currencyConverter">
        <ListItemButton>
          <ListItemIcon>
            <CurrencyExchangeIcon />
          </ListItemIcon>
          <ListItemText primary="Currency Exchange" />
        </ListItemButton>
        </Link>
      </ListItem>

      <ListItem key={"currencyEx"} disablePadding>
          <Link href="/sampleForm">
        <ListItemButton>
          <ListItemIcon>
            <ViewStream/>
          </ListItemIcon>
          <ListItemText primary="Sample Form" />
        </ListItemButton>
        </Link>
      </ListItem>
      
      <ListItem key={"currencyEx"} disablePadding>
          <Link href="/paginationForm">
        <ListItemButton>
          <ListItemIcon>
            <PagesIcon/>
          </ListItemIcon>
          <ListItemText primary="Pagination" />
        </ListItemButton>
        </Link>
      </ListItem>
              
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);


  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="header" style={{width: '100%'}}>
        <Grid container spacing-={2}>
          <Grid item>
            <Button onClick={toggleDrawer(true)}><MenuIcon /></Button> 
          </Grid>
          <Grid item sm={2}>
            <Image
                src="/images/navan_logo2.jpg"
                alt="Navan Logo"
                width={100}
                height={24}
                priority
             />
          </Grid>
        </Grid>
        </div>
      <div>
      
      <Drawer  open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      </div>
      <div className="mainContent" style={{height: '100%'}}>
        {children}
      </div>
      <Footer />
      </body>
    </html>
  );
}
