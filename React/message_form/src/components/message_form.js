import React, { Component } from 'react';
import './css/message_form.css';
import axios from 'axios'; 
import $ from 'jquery';

{/* important to install axios 'npm install axios' */}
{/* you can delete jquery to create your own form validations */}
class Message_Form extends Component {

    constructor(){
        super()
        this.state = {
            name:'',
            email:'',
            message:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.cancelCourse = this.cancelCourse.bind(this)
    }

        handleChange = e =>{
            this.setState({[e.target.name]: e.target.value})
        }

        async handleSubmit(e) {
            e.preventDefault()
            const { name, email, message} = this.state
            const form = await axios.post('/api/form', {
                name,
                email,
                message
            })
            
        }

        cancelCourse = () => {
            document.getElementById("my_form").reset();
        }

        componentDidMount = () => {

        {/*You can delete/edit this validation the purpos of this repo is to show that my back-end works */}
            var letters = /^[A-Za-z ]+$/;
            var form = $('#name, #email, #message');
            var email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            $('.FormField_Button').click(function(){
                alert('Message Sent!')
            })
        
            form.keyup(function(){
                if(!$('#name').val().match(letters)){
                    $('#name-error').html("Name must contain letters only*");
                }
                if($('#name').val()=="" || $('#name').val().match(letters)){
                    $('#name-error').html("");
                }
                if(!$('#email').val().match(email)){
                    $('#email-error').html("Invalid Email Address*");
                }
                if($('#email').val()=="" || $('#email').val().match(email)){
                    $('#email-error').html("");
                }
            })
        {/*You can delete/edit this validation the purpos of this repo is to show that my back-end works */}

    }; 

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" id='my_form'>
            <div className="FormField">
                <label className="FormField_Label" htmlFor="name">Name</label>
                <input 
                    type="name" 
                    id="name" 
                    className="FormField_Input" 
                    placeholder="Enter your name"
                    onChange={this.handleChange} 
                    name="name" />
                    <br/>
                <span id="name-error"></span>
              </div>
              

            <div className="FormField">
                <label className="FormField_Label" htmlFor="email">E-Mail Address</label>
                <input 
                    type="email" 
                    id="email" 
                    className="FormField_Input" 
                    placeholder="Enter your email"
                    onChange={this.handleChange}  
                    name="email" />
                <br/>
                <span id="email-error"></span>
              </div>

            <div className="FormField">
                <label className="FormField_Label" htmlFor="email">Message</label>
                <input 
                    type="textarea" 
                    id="message" 
                    className="FormField_Input" 
                    placeholder="Your Message Here"
                    onChange={this.handleChange}  
                    name="message" />
            </div>    

              <div className="FormField">
              <button onClick={this.cancelCourse} className="FormField_Button">Send Message</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Message_Form;