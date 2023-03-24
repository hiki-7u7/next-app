import { ReactNode } from 'react';
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'


export default function AboutPage() {
    return (
        <>
            <div className='content'>
                <h1>About page</h1>
                <Link href={"/contact"}>ir al Contact</Link>
            </div>
        </>
    )
};

AboutPage.getLayout = function getLayout( page:ReactNode ) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
