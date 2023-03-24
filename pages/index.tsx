import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'



export default function HomePage() {
    return (
        <>
            <MainLayout>
                <div className='content'>
                    <h1>Home page</h1>
                    <Link href={"/about"}>ir al about</Link>
                </div>
            </MainLayout>
        </>
    )
}
