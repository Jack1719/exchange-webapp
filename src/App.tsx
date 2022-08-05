import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import ExchangePage from "./pages/ExchangePage"
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route path='exchanges' element={<ExchangePage />}>
          <Route path=':id' element={<DetailPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
