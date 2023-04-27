import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1 id="heading-h1">Translator App using Next Js</h1>
    <a href='translator'><button type="submit">go</button></a>
    </>
  )
}
