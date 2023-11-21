import Footer from "./components/Footer"
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet} from 'react-router-dom'
import {Home} from './main.jsx'
import {Contact} from './contact.jsx'
import {Resume} from './resume.jsx'
import {Projects} from './projects.jsx'
import {About} from './about.jsx'



function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
        <Route element={<Contact /> } />
        <Route element={<Resume /> } />
        <Route element={<Projects /> } />
        <Route element={<About /> } />
        
        </Route>
    )
  )
  

  return (
    <>
     <h1>Hello</h1>
     <Footer/>
    </>
  )
}

const Root = () => {
  return
   <>
     <div>
       <Link to="./components/About"> About </Link>
       <Link to="./components/Contact"> Contact </Link>
       <Link to="./components/Projects"> Projects </Link>
       <Link to="./components/Resume"> Resume </Link>
     </div>

     <div>
      <Outlet />
     </div>
   </>
}

export default App
