
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Home'
import AboutPage from './Pages/About'
import BlogPage from './Pages/Blog'
import PortfolioPage from './Pages/Portfolio'
import ContactPage from './Pages/Contact'
import HeaderComp from './Components/Header/HeaderComp'
import FooterComp from './Components/Footer/FooterComp'
import CEOPage from './Pages/COOpage'
import COOPage from './Pages/CEOpage'
import Layout from './Pages/LayoutPage'
// import FooterComp from './Components/Footer/FooterComp'
// import HeaderComp from './Components/Header/HeaderComp'
// import MainComp from './Components/Main/MainComp'
// import AboutPage from './Pages/About'
// import BlogPage from './Pages/Blog'
// import ContactPage from './Pages/Contact'
// import HomePage from './Pages/Home'
// import PortfolioPage from './Pages/Portfolio'

// function App() {

//   return (
//     <>
//       <HeaderComp />
//       {/* <MainComp /> */}

//       {
//         location.pathname === '/' && <HomePage />
//       }

//       {
//         location.pathname === '/about' && <AboutPage />
//       }
      
//       {
//         location.pathname === '/blog' && <BlogPage />
//       }

//       {
//         location.pathname === '/portfolio' &&      <PortfolioPage />
//       }

//       {
//         location.pathname === '/contact' && <ContactPage />
//       }
//      <FooterComp />
//     </>
//   )
// }

function App(){
  return(
    <>
      <BrowserRouter>
      {/* <HeaderComp /> */}

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/about/ceo' element={<CEOPage />} />
            <Route path='/about/coo' element={<COOPage />} />
            <Route path='/blog' element={<BlogPage />} /> 
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Route>
        </Routes> 

        {/* <FooterComp /> */}

      </BrowserRouter>
    </>
  )
}

export default App
