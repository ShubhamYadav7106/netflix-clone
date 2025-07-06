// import React from 'react'
import Header from './components/Header'
import './App.scss'
import HomeBanner from './components/HomeBanner'
import Login from './components/Login'
import Banner from './components/Banner'
import List from './components/List'
const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <List/>
      {/* <HomeBanner/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App
