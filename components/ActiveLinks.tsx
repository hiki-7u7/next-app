import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties } from "react";


const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
};

interface Props {
    href: string;
    text: string;
}

export const ActiveLinks = ( { href, text }:Props ) => {

    const { asPath } = useRouter();

    return (
        <Link href={href} style={ (asPath === href) ? style : {} } >
            {text}
        </Link>
    )
}
