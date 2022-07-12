import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import SearchModal from './components/SearchModal'
import routerConfig from './router'
function App() {
  const [isOpen, seIsOpen] = useState(false)
  const handleToggleSearch = ()=> {
    seIsOpen(!isOpen)
  }
  return (
    <>
        <Header onOpen={handleToggleSearch}/>
        {isOpen && <SearchModal onOpen={handleToggleSearch}/>}
        <Routes>
            {routerConfig.map((item) => {
                const { path, element, ...rest } = item
                return (
                    <Route key={path} path={path} element={element} {...rest} />
                )
            })}
        </Routes>
        <Footer/>
    </>
  )
}

export default App

