import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import HomeBody from '@/app/homeBody';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{marginTop: '50px'}}>
            <HomeBody />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <div style={{padding: '24px'}}>
          </div>
        </div>
      </div>

    </main>
  );
}
