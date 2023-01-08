import Background from "../comps/Background"
import Content from "../comps/Content"
import democrats_crop from '/democrats_cropped.png'
import republicans_crop from '/republicans_cropped.png'
import '../css/App.css'

function Home() {
    return (
        <>
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

export default Home