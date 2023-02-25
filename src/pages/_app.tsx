import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Dispatch, createContext, useState } from "react";


// Router.events.on('routeChangeStart', () => NProgress.start());
// Router.events.on('routeChangeComplete', () => NProgress.done());
// Router.events.on('routeChangeError', () => NProgress.done());


export const AppContext = createContext(
  {} as {
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  }
);

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
