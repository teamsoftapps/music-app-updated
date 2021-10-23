import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import classes from "./Layout.module.css";
import { setUser } from "../store/musicReducer";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("music-app-credentials"));
        dispatch(setUser(user));
    }, []);

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="57x57" href="https://www.janmulder.us/app/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="https://www.janmulder.us/app/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="https://www.janmulder.us/app/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="https://www.janmulder.us/app/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="https://www.janmulder.us/app/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="https://www.janmulder.us/app/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="https://www.janmulder.us/app/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="https://www.janmulder.us/app/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://www.janmulder.us/app/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="https://www.janmulder.us/app/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://www.janmulder.us/app/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="https://www.janmulder.us/app/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://www.janmulder.us/app/favicon-16x16.png" />
                <link rel="manifest" href="https://www.janmulder.us/app/manifest.json" />
                <meta name="msapplication-TileColor" content="#523a1d" />
                <meta name="msapplication-TileImage" content="https://www.janmulder.us/app/ms-icon-144x144.png" />
                <meta name="theme-color" content="#523a1d" />
                <title>Mulder Music Streaming</title>
                <meta name="description" content="Mulder Music Streaming." />
                {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
            </Head>
            <div className={classes.layout}>
                <Header />
                <main className={classes.layoutMain}>{children}</main>
            </div>
        </>
    );
};

export default Layout;
