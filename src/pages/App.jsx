import '../css/App.css'
import '../comps/Background'
import Background from '../comps/Background'
import Content from '../comps/Content'
import democrats_crop from '/democrats_cropped.png'
import republicans_crop from '/republicans_cropped.png'



//TODO: https://www.framer.com/developers/guides/
//TODO: https://mui.com/material-ui/react-typography/
//TODO: Interactive map: https://blog.bitsrc.io/top-5-map-libraries-for-react-in-2021-20a37ff5234

function App() {

  return (
    <>
      <div className="navbar">
        <a href="/" className='nav_child'>Home</a>
        <a href="/map" className='nav_child'>Map</a>
        <a href="/about" className='nav_child'>About</a>
      </div>
      <Background></Background>
      <div className="back">
        <div className="left">
          <img className="img_left" src={democrats_crop} ></img>
        </div>
        <div className="right">
          <img className="img_right" src={republicans_crop} ></img>
        </div>
        <div className="content">
          <Content></Content>
        </div>
      </div>
    </>
  )
}

export default App
