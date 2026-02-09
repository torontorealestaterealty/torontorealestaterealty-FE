
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/home.jsx';
import Header from './components/Header/header.jsx';
import TorontoRealEstateBoardPage from './pages/Boards/TREB/TorontoRealEstateBoard.jsx';
import OnePointPage  from './pages/Boards/onepointar/OnePointAR.jsx';
import BDARPage from './pages/Boards/BDAR/BDAR.jsx';
import ConnerstonePage from './pages/Boards/Connerstone/Cornerstone.jsx';
import Resources from './pages/Resources/resourcesHub.jsx';
import Parking from './pages/Plans/parking/parking.jsx';
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
        {
          path:'boards/treb',
          element: <TorontoRealEstateBoardPage/>
        },
        {
          path:'boards/onepointar',
          element: <OnePointPage/>
        },
        {
          path:'boards/bdar',
          element: <BDARPage/>
        },
        {
          path:'boards/cornerstone',
          element: <ConnerstonePage/>
        },
        {
          path:'resources',
          element: <Resources/>
        },
         {
          path:'parking',
          element: <Parking/>
        },
      ]}
  ])

function App() {


  return <RouterProvider router={router} />
  
}

export default App
