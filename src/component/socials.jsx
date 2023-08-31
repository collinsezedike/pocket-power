import {BsInstagram, BsTwitter} from 'react-icons/bs'
import './socials.css'

const Socials = ()=>{
    return(
        <div id='social'>
            <div className='instagram'>
                <div>
                    <BsInstagram size={40} color='white' style={{backgroundColor:'rgb(255, 0, 85)',padding:'7px'}} />
                </div>
                <p>@abeg.app</p>
            </div>
            <div className='twitter'>
                <div>
                    <BsTwitter size={40} color='white' style={{backgroundColor:'rgb(0, 195, 255)',padding:'7px'}}/>
                </div>
                <p>@abeg.app</p>
            </div>
        </div>
    )
}

export default Socials