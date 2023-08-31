import {BiSolidHomeCircle} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {GoCreditCard} from 'react-icons/go'
import './footer.css'

const Footer = ()=>{
    return(
        <footer>
            <div>
                <BiSolidHomeCircle size={23} color='gray' />
                <p>Home</p>
            </div>
            <div>
                <BsSearch size={21} color='gray' />
                <p>Search</p>
            </div>
            <div>
                <GoCreditCard size={21} color='gray' />
                <p>Card</p>
            </div>
            <div>
                <div style={{border:'1px solid gray',borderRadius:'50%',overflow:'hidden',width:'25px',height:'25px'}}>
                    <img src='/profile-img.jpg' alt='profile picture' />
                </div>
                    <p>Profile</p>
            </div>
        </footer>
    )
}

export default Footer