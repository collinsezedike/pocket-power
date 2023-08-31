import './navigation.css'
import { useState } from 'react'
const Navigation = ()=>{
    const [isHomeActive,setIsHomeActive] = useState(true)
    const [isTransactionActive,setIsTransactionActive] = useState(false)
    return(
        <div id="navigation">
            <p 
            onClick={()=>{
                setIsHomeActive(true)
                setIsTransactionActive(false)
                }
            }
            className={isHomeActive?'border':''}>Home</p>
            <p
            onClick={()=>{
                setIsHomeActive(false)
                setIsTransactionActive(true)
                }
            }
            className={isTransactionActive?'border':''}>Transactions</p>
        </div>
    )
}

export default Navigation