import React, { useEffect } from 'react'

import Head from "next/head"
import Image from "next/image"
import { useRouter } from 'next/router'


// import styles
import styles from "./header.module.css";

// import images
import Logo from "../../../assets/logo.png";
import Divide from "../../../assets/divide.png";

const Header = () => {

    const menuData = [
        {
            title: "MY DASHBOARD",
            path: '/mydashboard',
        },
        {
            title: "MY FUND",
            path: '/myfund',
        },
        {
            title: "DEPOSIT",
            path: '/deposit',
        },
        {
            title: "BORROW",
            path: '/borrow',
        },
    ]

    const router = useRouter();
    useEffect(() => {
        console.log(router.route)
    }, [router])
    return (
        <React.Fragment>
            <Head>
                <title>AAVE</title>
                <link rel="icon" href="icon/aave1.png" />
            </Head>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo} onClick={() => router.push('/')} >
                        <Image src={Logo} alt="Logo" layout='intrinsic' width={264} height={54} />
                    </div>
                    <div className={styles.menushowhide}>
                        <div className={styles.menu}>
                            {
                                menuData.map((item, key) => (<div key={key} className={`${styles.menubar} ${router.route === item.path && styles.active}`} onClick={() => router.push(item.path)}>{item.title}</div>))
                            }
                            <div className={styles.divide}>
                                <Image src={Divide} alt="Divide" width={1} height={41} />
                            </div>
                            <div className={`${styles.menubar} ${router.route === '/addnetwork' && styles.active}`} onClick={() => router.push('/addnetwork')} >Add Network</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
