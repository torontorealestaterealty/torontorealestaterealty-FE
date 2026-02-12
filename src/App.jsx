
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
import FullTimeAgents from './pages/Plans/fullTimeAgents/fullTimeAgents.jsx';
import TrebNonTrebTrading from './pages/Plans/trading/TrebNonTrebTrading.jsx';
import WhyUs from './pages/Why/WhyUs/whyUs.jsx';
import ChoosingBrokerage from './pages/Why/ChoosingBrokerage/choosingBrokerage.jsx';
import AboutUs from './pages/Why/AboutUs/aboutUs.jsx';
import CloudVsTraditionalBrokeragePage from './pages/Why/CloudVsTraditionalBrokerage/cloudVsTraditionalBrokerage.jsx';
import RegisteringWithRecoPage from './pages/Resources/New&ExperiencedAgents/RegisteringWithRecoPage/RegisteringWithRecoPage.jsx';
import NewAgentsChangingMarketPage from './pages/Resources/New&ExperiencedAgents/ChangingMarket/ChangingMarket.jsx';
import NewLicensedAgentsPage from './pages/Resources/New&ExperiencedAgents/NewLicensed/NewLicensed.jsx';
import ExperiencedAgents from './pages/Resources/New&ExperiencedAgents/ExperiencedAgents/ExperiencedAgents.jsx';
import FAQ from './pages/Resources/FAQ/FAQ.jsx';
import FAQHub from './pages/Resources/FAQ/FAQHub.jsx';
import ParkingLicenseFAQ from './pages/Resources/FAQ/ParkingLicense.jsx';
import MLSBoardAccessFAQ from './pages/Resources/FAQ/MLSBoardAccess.jsx';
import SupportServicesFAQ from './pages/Resources/FAQ/SupportServices.jsx';
import PaymentsFeesFAQ from './pages/Resources/FAQ/PaymentsFees.jsx';
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
          path:'plans',
            element: <Parking/>
        },
        {
          path:'plans/fulltimeagents',
          element: <FullTimeAgents/>
        },
        {
          path:'plans/trading',
          element: <TrebNonTrebTrading/>
        },
        {
          path:'why',
          element: <WhyUs/>
        },
        {
          path:'why/choosing-brokerage',
          element: <ChoosingBrokerage/>
        },
        {
          path:'why/about-us',
          element: <AboutUs/>
        },
        {
          path:'why/cloud-vs-traditional',
          element: <CloudVsTraditionalBrokeragePage/>
        },
        {
          path:'registering-with-reco',
          element: <RegisteringWithRecoPage/>
        },
        {
          path:'changing-market',
          element: <NewAgentsChangingMarketPage/>
        },
        {
          path:'new-licensed-agents',
          element: <NewLicensedAgentsPage/>
        },
        {
          path:'experienced-agents',
          element: <ExperiencedAgents/>
        },
        {
          path:'faq',
          element: <FAQ/>
        },
        {
          path:'resources/faq',
          element: <FAQHub/>
        },
        {
          path:'resources/faq/parking-license',
          element: <ParkingLicenseFAQ/>
        },
        { 
          path:'resources/faq/mls-board-access',
          element: <MLSBoardAccessFAQ/>
        },
        { 
          path:'resources/faq/support-services',
          element: <SupportServicesFAQ/>
        },
        {
          path:'resources/faq/payments-fees',
          element: <PaymentsFeesFAQ/>
        }
      ]}
  ])

function App() {


  return <RouterProvider router={router} />
  
}

export default App
