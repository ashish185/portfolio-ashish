import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion';


const CustomLink = ({ title, href, className }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (<Link href={href} className={`${className} relative group`} title={title}>
    {title}
    <span className={
      `h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}` 
    }
    ></span>
  </Link>)
}

const CustomAnchor = ({ url, className, children }) => {
  return (
    <motion.a
      className={`w-6 mx-3 ${className}`}
      whileHover={{ y: -2 }} //lift ups the icon
      href={url}
      // whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}


const NavBar = () => {
  return (
    <header
      className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
      <nav>
        <CustomLink href="/" title={'Home'} className={'mr-5'} />
        <CustomLink href="/about" title={'About'} className={'mx-5'} />
        <CustomLink href="/projects" title={'Projects'} className={'mx-5'} />
        <CustomLink href="/articles" title={'Articles'} className={'mx-5'} />
      </nav>
      <Logo />{/* TO do: Center of page */}
      <nav className='flex justify-center flex-wrap'>
        <CustomAnchor url="https://github.com">
          <GithubIcon />
        </CustomAnchor>
        <CustomAnchor url="https://github.com">
          <TwitterIcon />
        </CustomAnchor>
        <CustomAnchor url="https://github.com">
          <LinkedInIcon />
        </CustomAnchor>
      </nav>
    </header>
  )
}

export default NavBar