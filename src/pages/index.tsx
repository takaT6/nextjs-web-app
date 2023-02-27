import FirebaseList from '@/components/FirebaseList';
import { getCurrentPosition } from '@/libs/GeolocationUtil';
import Head from 'next/head';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    getCurrentPosition();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirebaseList />
    </>
  );
};

export default Home;