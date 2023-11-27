import Footer from "./components/Footer"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Projects from './components/Projects'
import About from './components/About'
import Root from './components/Root'



function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<About /> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/resume" element={<Resume /> } />
        <Route path="/projects" element={<Projects /> } />
        
        </Route>
    )
  );
  
  return (
    
     <div className="App">
      <RouterProvider router={router}/>
      <Footer/>
</div>
    
  )
}



export default App
