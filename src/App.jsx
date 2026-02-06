
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/home.jsx';
import Header from './components/Header/header.jsx';
const router = createBrowserRouter([

  {element:<Home/>, path:'/home'},
  {
    
      element: <Header />,
      path: '/',
      children: [
        {
          index:true,
          element:<Home/>
        },
      ]}
  ])

function App() {


  return <RouterProvider router={router} />
  
}

export default App
