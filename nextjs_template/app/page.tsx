import Image from "next/image";
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="header" style={{width: '100%'}}>
       <Image
              src="/images/navan_logo2.jpg"
              alt="Navan Logo"
              width={100}
              height={24}
              priority
            />
      </div>

      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div style={{padding: '24px'}}>
            <h1>Let's build an app with Grise, and the Navan engineering team.</h1>
          </div>
        </div>
      </div>

    </main>
  );
}
