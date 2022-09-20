import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import DetailPage from './Pages/DetailPage'
import './styles/global.scss'

function App() {
  const [switchTheme, setSwitchTheme] = useState(false)

  const mq = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    setSwitchTheme(mq.matches)
  }, [mq.matches])

  return (
    <div className="App">
      <Header
        switchTheme={switchTheme}
        changeTheme={() => setSwitchTheme(!switchTheme)}
      />
      <Routes>
        <Route path="/" element={<HomePage switchTheme={switchTheme} />} />
        <Route
          path="/detail/:id"
          element={<DetailPage switchTheme={switchTheme} />}
        />
      </Routes>
    </div>
  )
}

export default App
