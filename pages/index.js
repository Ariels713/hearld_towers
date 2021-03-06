import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import MainHero from "../components/main-hero/MainHero"
import MainSection from "../components/mainSection/MainSection"
import ImageGallery from "../components/gallery/ImageGallery"
import BodyCopy from "../components/bodyCopy/BodyCopy"
import SecondaryHero from "../components/hero/SecondaryHero"
import ClosingHero from "../components/hero/ClosingHero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hearld Towers</title>
        <meta name="description" content="Generated by Hearld Towers" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainHero />
      <MainSection bgColor="bg-gray-200" textColor="text-gray-900" />
      <ImageGallery />
      <BodyCopy />
      <SecondaryHero />
      <ClosingHero />
    </div>
  )
}
