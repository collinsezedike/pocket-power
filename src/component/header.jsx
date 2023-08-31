import {LiaAngleLeftSolid} from 'react-icons/lia'
import {BiExport} from 'react-icons/bi'
import {VscVerifiedFilled} from 'react-icons/vsc'
import {AiFillLock} from 'react-icons/ai'
import {MdOutlineMail} from 'react-icons/md'
import './header.css'

const Header = ()=>{
    return(
        <header id='header'>
            <nav>
                <LiaAngleLeftSolid size={25}/>
                <BiExport size={25}/>
            </nav>
            <div id="logo">
                <div className="logo-div">
                    <img src="/pocketpower.png" alt="photo of logo" />
                </div>
                <button>Follow</button>
            </div>
            <h4>
                Pocket Power 
                <VscVerifiedFilled style={{marginLeft:8}} size={20} color='purple'/>
            </h4>
            <p>
                @pocket_power 
                <AiFillLock size={6} style={{marginLeft:3, marginRight:3}}/>
                <span>App</span>
            </p>
            <h5>Buy power 24/7 on pocket app</h5>
            <span>
                <span>
                    <MdOutlineMail size={32} color='white' style={{backgroundColor:'transparent'}} />
                </span>
                <p>Contact</p>
            </span>
        </header>
    )
}

export default Header