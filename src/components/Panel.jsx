import React from 'react'
import styled from 'styled-components'
import { Zap } from '@styled-icons/octicons'
import { PatchPlus, Wifi, PatchQuestionFill } from '@styled-icons/bootstrap'
import { Analytics } from '@styled-icons/ionicons-outline/'
import { Tag } from '@styled-icons/heroicons-outline/Tag'
import irancellMan from './My Irancel.png'
import { SimCard } from '@styled-icons/fa-solid/SimCard'
import { ContactPhone } from '@styled-icons/material/ContactPhone'
import {Home} from "@styled-icons/boxicons-regular/Home"
import Search from './Search'
import '../App.css'

function Panel() {
  // const RedZap = styled(Zap)`
  // width:1rem;
  // color: #818181;`

  return (
    <div className="panel">
      <img src={irancellMan} className="irancellManImage"/>
      <Search />
      <div className='mainPageItem panelItem'>
          <Home  style={{ width: '1rem', color:'#FDC816', marginLeft: '8px' }}/>
          صفحه اصلی
          </div>
      <div className='panelHeadItem'>سرویس ها </div>

      <div className="panelItem ">
        <PatchPlus
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        شارژ اینترنت
      </div>

      <div className="panelItem">
        <Wifi
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        اینترنت
      </div>

      <div className="panelItem">
        <Analytics
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        کارکرد و فروش{' '}
      </div>

      <div className="panelItem">
        <Tag style={{ width: '24px', color: '#818181', marginLeft: '8px' }} />
        خدمات
      </div>

      <div  className='panelHeadItem'> مدیریت خدمات</div>

      <div className="panelItem">
        <SimCard
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        مدیریت سیمکارت
      </div>


      <div  className='panelHeadItem'> </div>

      <div className="panelItem">
        <PatchQuestionFill
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        سوالات متداول
      </div>

      <div className="panelItem">
        <ContactPhone
          style={{ width: '24px', color: '#818181', marginLeft: '8px' }}
        />
        ارتباط با ما
      </div>
    </div>
  )
}

export default Panel
