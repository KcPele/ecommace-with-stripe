import React from 'react'
import Head from "next/head"
import { Navbar } from '.'
const Layout = () => {
  return (
    <div className='layout'>
      <Head>
        <title>App Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        EMPTY
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

export default Layout