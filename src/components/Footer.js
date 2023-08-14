import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    // <div>Footer</div>
    <footer className='w-full border-t-2 border-solid border-dark
      font-medium text-lg
    '>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights reserved</span>
        <div className='flex justify-center items-center'>
        &nbsp; Build with <span>&#9825;</span> &nbsp;
          <Link href="/" className='underline underline-offset-2'>website</Link>
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer