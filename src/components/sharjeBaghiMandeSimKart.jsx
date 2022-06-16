import React from 'react'
import downloadIrancell from './Rectangle 15.png'
import {PatchPlus} from "@styled-icons/bootstrap/PatchPlus"
import {MessageAltDetail} from "@styled-icons/boxicons-regular/MessageAltDetail"
import {PackageIcon} from "@styled-icons/boxicons-solid/PackageIcon"
import sharjChart from './Chart2.png'

function SharjeBaghiMandeSimKart() {
  return (
    <div className="sharjeBaghiMandeSimKart">
          <h3>شارژ باقی مانده سیمکارت</h3>
          <img src={sharjChart} />
          <h3>خدمات فعال</h3>

          <div className="khadamateFaal">

            <div className="bastehayeFaalSection">
            <PackageIcon  style={{width:'24px',color:"#FDC816",marginLeft:"8px",backgroundColor:"rgba(253, 200, 22, 0.13)", padding:"5px",borderRadius:"8px"}}/>
             <div className='bastehayeFaalInnerSection'>
                  <p>بسته پیامک هفتگی</p>
              
              <p>تا تاریخ 31 خرداد 1400</p>
             </div>
           
            </div>

            <div className="bastehayeFaalSection">
            <MessageAltDetail  style={{width:'24px',color:"#FDC816",marginLeft:"8px",backgroundColor:"rgba(253, 200, 22, 0.13)", padding:"5px",borderRadius:"8px"}}/>
            <div className='bastehayeFaalInnerSection'>
             <p>بسته اینترنت ماهانه</p>
              <p>تا تاریخ 12 خرداد 1400</p>
          </div>
             
            </div>
          </div>

          <img src={downloadIrancell} className="downloadIrancellImage"/>
        </div>
  )
}

export default SharjeBaghiMandeSimKart