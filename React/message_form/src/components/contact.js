import React, { Component } from 'react';
import Message_Form from './message_form';
import './css/contact.css';

class Contact extends Component{
    render(){
        return(
            <div className='contact-page'>

            <div className="row">
            <div className="column_left">
                
                <h1>Message Me!</h1>
                <Message_Form/>
            </div>
            <div className="column_right">
                <h1>Thank you!</h1>
                <p>Seems like you went through my website and loved my minimalistic work!</p>
                <p>You can simply send me a short message using this form or you can email me at oliveratwork08@gmail.com and I will be in contact with you shortly.</p>
                <p>Again, thank you for your message!</p>
            </div>
            </div>
                
            </div>
        )
    }
}

export default Contact;