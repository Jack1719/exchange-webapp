import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}></Route>
    </Routes>
  )
}

export default App
