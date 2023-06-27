'use client'

import localFont from 'next/font/local'
import React from 'react'
import Component from '@/app/Component'

const fontSatoshi = localFont({ src: '../fonts/Satoshi-Medium.woff2' })



export default function Home() {
  return (
    <main className={ fontSatoshi.className }>
      <Component />
    </main>
  )
}
