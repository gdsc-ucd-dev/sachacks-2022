import Link from "next/link";

export default function Route ({href, text, className}) {

    const LinkClass = `transition text-opacity-100 hover hover:text-opacity-70 ${className}`;

    return (
        <Link href={href}> 
            <a className={LinkClass}>{text}</a>
        </Link>
    )
}