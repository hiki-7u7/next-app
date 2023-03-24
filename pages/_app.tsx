import '../styles/globals.css';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';


type NextPageWithLayout = NextPage & {
  getLayout: ( page: JSX.Element ) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};


export default function App( { Component, pageProps }:AppPropsWithLayout ) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
