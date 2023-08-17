import React , {useState , useEffect} from 'react'

// react router
import { BrowserRouter, Routes, Route, Router, Link, NavLink } from 'react-router-dom'

// components
import Header from '../src/components/Header'
import Features from '../src/components/Features'
import Services from '../src/components/Services'
import Subscribe from '../src/components/Subscribe'
import Swiper from 'swiper'
import { EmailJSResponseStatus } from 'emailjs-com'
import { ScaleLoader } from 'react-spinners'

const App = () => {
  
  const [Loading , setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    } , 3000)
  } , [])





  return (
    <BrowserRouter>

    {Loading ?

    <div className='preloaderr'>
      <ScaleLoader color={'#f87765'} loading={Loading} height={100} margin={"20"} />
    </div> :
    <>
    <Header />
        <div className='f-heading'>
            <h1>Features</h1>
            <p>Here are some features of the Software</p>
        </div>
        <Features />
        <Services />
        <Subscribe />
    </>
    }

 
    </BrowserRouter>
  )
}

export default App