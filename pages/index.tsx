import type { NextPage } from 'next'
import styles from '../assets/styles/schema/Schema.module.scss'
import dynamic from "next/dynamic";
import React from "react";

const NoSSRComponent = dynamic(() => import("../components/mind-map"), {
    ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <NoSSRComponent />
    </div>
  )
}

export default Home
