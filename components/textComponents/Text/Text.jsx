import styles from './Text.module.scss';
import Link from "next/link";

const H1 = ({children}) => {
    return (
        <>
            <h1 className={styles.h1}>{children}</h1>
        </>
    );
};

const H2 = ({children}) => {
    return (
        <>
            <h2 className={styles.h2}>{children}</h2>
        </>
    );
};

const H3 = ({children}) => {
    return (
        <>
            <h3 className={styles.h3}>{children}</h3>
        </>
    );
};

const H4 = ({children}) => {
    return (
        <>
            <h4 className={styles.h4}>{children}</h4>
        </>
    );
};

const Par = ({children}) => {
    return (
        <>
            <p className={styles.p}>{children}</p>
        </>
    );
};

const A = ({href, text}) => {
    return (
        <>
            <Link href={href}><a className={styles.a}>{text}</a></Link>
        </>
    );
};

const A2 = ({href, text, target}) => {
    return (
        <>
            <a href={href} className={styles.a} target={target}>{text}</a>
        </>
    );
};


export {H1, H2, H3, H4, Par, A, A2};