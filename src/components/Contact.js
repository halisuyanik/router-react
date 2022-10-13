import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ModalExampleBasic from './ModalExampleBasic';
const Contact=()=>{
    return(
        <div>
            <Modal></Modal>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
                <h3 className='ui header'>Contact</h3>
                <Link to='/alex' className='ui header'></Link>
                <p>alex</p>
            </div>
            <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
                <h3 className='ui header'>Contact</h3>
                <Link to='/benjamin' className='ui header'></Link>
                <p>benjamin</p>
            </div>
        </div>
        
    )
}

export default Contact;