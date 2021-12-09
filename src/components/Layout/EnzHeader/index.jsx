import React, { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { CgMenu } from "react-icons/cg";

// import styles
import styles from "./enzheader.module.css";

// import images
import Logo from "../../../assets/logo.png";

const EnzHeader = () => {

    const router = useRouter();
    const [state, setState] = useState(false);

    const menuData = [
        {
            title: "OVERVIEW",
            path: "/enz/overview",
        },
        {
            title: "TRADE/SWAP",
            path: "/enz/tradeswap",
        },
        {
            title: "Provide Liquidity",
            path: "/enz/provide",
        },
        {
            title: "STAKE",
            path: "/enz/stake",
        },
        {
            title: "YIELD",
            path: "/enz/yield",
        },
        {
            title: "REWARDS",
            path: "/enz/rewards",
        },
        {
            title: "POLICIES",
            path: "/enz/policies",
        },
        {
            title: "SETTINGS",
            path: "/enz/settings",
        },
    ];

    const openNav = () => {
        setState(true);
    };

    const closeNav = () => {
        setState(false);
    };

    return (
        <React.Fragment>
            <Head>
                <title>AAVE</title>
                <link rel="icon" href="icon/aave1.png" />
            </Head>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <div className={styles.logos} onClick={() => router.push("/")}>
                            <Image
                                src={Logo}
                                alt="Logo"
                                layout="intrinsic"
                                width={264}
                                height={54}
                            />
                        </div>
                        <div className={styles.menuicon} onClick={openNav}>
                            <CgMenu fontSize={40} />
                        </div>
                        <div
                            className={`${styles.overlay}  ${state ? styles.openNav : ""}`}
                        >
                            <div className={styles.closebtn} onClick={closeNav}>
                                &times;
                            </div>
                            <div className={styles.overlaycontent}>
                                {menuData.map((item, key) => (
                                    <div
                                        key={key}
                                        onClick={() => {
                                            router.push(item.path);
                                            closeNav();
                                        }}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.menu}>
                        {menuData.map((item, key) => (
                            <div
                                key={key}
                                className={`${styles.menubar} ${router.route === item.path && styles.active
                                    }`}
                                onClick={() => router.push(item.path)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EnzHeader;
