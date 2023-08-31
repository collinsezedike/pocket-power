import { useState } from 'react'
import './home.css'
import PaymentPage from './paymentPage'

const Home = ()=>{

    const [selectedImg, setSelectedImg] = useState('')
    const [selectedText, setSelectedText] = useState('')
    const [paymentPage, setPaymentPage] = useState(false)

    if(paymentPage){
        <PaymentPage img={selectedImg} text={selectedText} />
    }

    return(
        <div id='home'>
            <h4>Services</h4>
            <div className='card-container'>
                <div className='card' onClick={()=>{
                    setSelectedImg('/ikedc.jpg')
                    setSelectedText('ikeja electric prepaid')
                    setPaymentPage(true)
                }}>
                    <img src='/ikedc.jpg' alt='' />
                    <p>ikeja electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/ikedc.jpg' alt='' />
                    <p>ikeja electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/ekedc.jpeg' alt='' />
                    <p>eko electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/ekedc.jpeg' alt='' />
                    <p>eko electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/ibedc.jpeg' alt='' />
                    <p>ibadan electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/ibedc.jpeg' alt='' />
                    <p>ibadan electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/phed.jpeg' alt='' />
                    <p>portharcourt electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/phed.jpeg' alt='' />
                    <p>portharcourt electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/kedco.png' alt='' />
                    <p>kedco electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/kedco.png' alt='' />
                    <p>kedco electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/aedc.jpeg' alt='' />
                    <p>abuja electric prepaid</p>
                </div>
                <div className='card'>
                    <img src='/aedc.jpeg' alt='' />
                    <p>abuja electric postpaid</p>
                </div>
                <div className='card'>
                    <img src='/jed.jpeg' alt='' />
                    <p>jos electric prepaid</p>
                </div>
                <div className='card card-end'>
                    <img src='/jed.jpeg' alt='' />
                    <p>jos electric postpaid</p>
                </div>
            </div>
            <div className='card-end'></div>
        </div>
    )
}

export default Home