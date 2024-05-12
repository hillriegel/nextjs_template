import Image from "next/image";
import Grid from '@mui/material/Grid';
import ExternalApiAxios from '@/app/utils/apiRequest';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const now = new Date();

export default function CurrencyConverter() {
  return (
    <main className="flex  flex-col">
      <div className="header" style={{width: '100%'}}>
       <Image
              src="/images/navan_logo2.jpg"
              alt="Navan Logo"
              width={100}
              height={24}
              priority
            />
      </div>
      <div className="items-center justify-between" style={{marginTop: '10px', width: '100%', textAlign: 'center', color: '#fff'}}>
        {now.toDateString()}
      </div>
      <div className="min-h-screen flex-1" style={{padding: '20px', width: '100%'}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={{backgroundColor: '#fff', width: '80%'}}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item>
                <TextField id="outlined-basic" label="Amount" variant="outlined" />
              </Grid>
              <Grid item>
                <ExternalApiAxios />
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
              <TextField id="outlined-basic" label="Amount" variant="outlined" />
              </Grid>
              <Grid item>
                <ExternalApiAxios />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </Grid>

      </Grid>
      </div>

      <div className="flex w-full">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div style={{padding: '24px'}}>
            <h1>Let's build an app with Grise, and the Navan engineering team.</h1>
          </div>
        </div>
      </div>
      </div>

    </main>
  );
}
