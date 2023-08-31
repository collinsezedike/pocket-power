/* eslint-disable react/prop-types */

import './paymentpage.css'
const PaymentPage = ({img,text})=>{
    return(
        <div id='payment-page'>
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default PaymentPage