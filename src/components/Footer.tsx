import React from "react"

interface IProps {}
/**
 * Footer Component
 */

const Footer: React.FC<IProps> = () => {
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:px-6 md:py-8' id='footer-id'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a href='#' className='flex items-center mb-4 sm:mb-0'>
          <img
            src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
            className='mr-3 h-8'
            alt='Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>Test</span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0'>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center'>
        © 2022{" "}
        <a href='#' className='hover:underline'>
          Test
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer
