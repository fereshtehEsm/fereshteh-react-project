import './App.css'
import masrafeKolChart from './components/Chart1.png'
import Profile from './components/Profile'
import header from './components/Vector.png'
import SharjeBaghiMandeSimKart from './components/sharjeBaghiMandeSimKart'
import Panel from "./components/Panel"
import Jadval from "./components/Jadval"



function App() {
  return (
    <div className="grid-container">
      <div className="grid-item first">
        <Profile />
       <SharjeBaghiMandeSimKart/>
      </div>
      <div className="grid-item second">
        <h1>صفحه اصلی</h1>

        <img src={header} id="header-img" />
        <div className="nemodareMizanMasraf">
          <h2>نمودار میزان مصرف کل</h2>
          <img src={masrafeKolChart} id="diagram-img" />
        </div>
       <Jadval/>
      </div>
      <div className="grid-item third">
    <Panel/>
    </div>
    </div>
  )
}

export default App
