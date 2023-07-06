import React from 'react'
// import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import Menu from '@/app/Menu'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 56px 0 56px' } }>
      {/*<Logo></Logo>*/ }
      <div style={ { display: 'flex', gap: 43, alignItems: 'center'}}>
        <Link href="/" passHref legacyBehavior={ false }> <Image src={ '../logo.svg' } width="31" height="31" alt="logo"/> </Link>
        <Menu />
      </div>
      <button className="light-btn">Contact Us</button>
    </div>
  )
}

export default Header