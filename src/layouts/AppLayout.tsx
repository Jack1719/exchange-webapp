import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface IProps {}
/**
 * App Layout Component
 */

const AppLayout: React.FC<IProps> = () => {
  return (
    <div className='App'>
      <Header />
      <div className='min-h-screen p-4' id='main-id'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
