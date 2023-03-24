import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'



export default function ContactPage() {
    return (
        <>
            <MainLayout>
                <div className='content'>
                    <h1>Contact page</h1>
                    <Link href={"/pricing"}>ir al Pricing</Link>
                </div>
            </MainLayout>
        </>
    )
}
