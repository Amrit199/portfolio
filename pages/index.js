import Head from 'next/head'

import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Main from './Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AMRIT TAMANG || FRONTEND DEVELOPER</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </>
  )
}
