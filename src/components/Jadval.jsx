import React from 'react'
import Button from './Button'

function Jadval() {
  return (
      <div>
  <div className="jadval">
    <h2>!بسته های پیشنهادی مخصوص خود شما</h2>
    <table>
      <colgroup span="5"></colgroup>
      <tr>
        <th>تاریخ انقضا بسته</th>
        <th>نام بسته</th>
        <th>تخفیف</th>
        <th> قیمت(تومان)</th>
        <th />
      </tr>
      <tr>
        <td>یک مرداد 1400</td>
        <td>بسته سه ماهه اینترنت</td>
        <td>50% </td>
        <td>99,000</td>
        <td>
          <Button name="خرید" />
        </td>
      </tr>
      <tr>
        <td>دوم تیر 1400</td>
        <td>بسته یک هفته ای اینترنت شبانه</td>
        <td>80% </td>
        <td>19,900</td>
        <td>
          <Button name="خرید" />
        </td>
      </tr>
      <tr>
        <td>سوم خرداد 1400</td>
        <td>بسته مکالمه یک روزه</td>
        <td>20% </td>
        <td>9,000</td>
        <td>
          <Button name="خرید" />
        </td>
      </tr>
    </table>
  </div>
  </div>
  )
}

export default Jadval