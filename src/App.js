import logo from './logo.svg'
import './App.css'
import sharjChart from './components/Chart2.png'
import masrafeKolChart from './components/Chart1.png'
import downloadIrancell from './components/Rectangle 15.png'
import Profile from './components/Profile'
import header from './components/Vector.png'
import irancellMan from './components/My Irancel.png'

function App() {
  return (
    <div className="grid-container">
      <div className="grid-item first">
        <Profile />
        <div className="sharjeBaghiMandeSimKart">
          <div>شارژ باقی مانده سیمکارت</div>
          <img src={sharjChart} />

          <div>
            <h2>خدمات فعال</h2>

            <div>بسته پیامک هفتگی تا تاریخ 31 خرداد 1400</div>

            <div>بسته اینترنت ماهانه تا تاریخ 12 خرداد 1400</div>
          </div>
          <img src={downloadIrancell} />
        </div>
      </div>
      <div className="grid-item second">
        <h1>صفحه اصلی</h1>
        <img src={header} />
        <img src={masrafeKolChart} />
        <div className="nemodareMizanMasraf"></div>
        <div className="jadval"></div>
      </div>
      <div className="grid-item third">
        <img src={irancellMan}/>
        <input/>
        <div>صفحه اصلی</div>
        <div>سرویس ها </div>
        <div>شارژ اینترنت</div>
        <div> اینترنت</div>
        <div>کارکرد و فروش </div>
        <div>خدمات </div>
        <div> مدیریت خدمات</div>
        <div> مدیریت سیمکارت</div>
        <div> سوالات متداول</div>
        <div> ارتباط با ما</div>
      </div>
    </div>
  )
}

export default App
