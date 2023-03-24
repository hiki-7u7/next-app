import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'



export default function PrincingPage() {
    return (
        <>
            <MainLayout>
                <div className='content'>
                    <h1>Pricing page</h1>
                    <Link href={"/"}>ir al Home</Link>
                </div>
            </MainLayout>
        </>
    )
}
