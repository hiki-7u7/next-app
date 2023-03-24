import React from 'react'
import Head from 'next/head'
import { NavBar } from '../NavBar'
import style from './MainLayout.module.css'
import { ReactNode } from 'react';


interface Props {
    children: ReactNode;
}


export const MainLayout = ( {children}:Props ) => {
    return (
        <>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="home page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <header>
                <NavBar />
            </header>
                    
            <main className={style.main}>
                {children}
            </main>

        </>
    )
}
