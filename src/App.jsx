import './comps/Background'
import Navbar from './comps/Navbar'
import Home from './pages/Home'
import Map from './pages/AppMap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


//TODO: https://www.framer.com/developers/guides/
//TODO: https://mui.com/material-ui/react-typography/
//TODO: Interactive map: https://blog.bitsrc.io/top-5-map-libraries-for-react-in-2021-20a37ff5234

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="map" element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
