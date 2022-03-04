import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainHero from "../components/main-hero/MainHero"
import MainSection from "../components/mainSection/MainSection"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hearld Towers</title>
        <meta name="description" content="Generated by Hearld Towers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainHero />
      <MainSection />
    </div>
  )
}
