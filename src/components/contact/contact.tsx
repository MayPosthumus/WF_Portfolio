import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import styles from "./contact.module.css";

interface Email {
    name: string,
    email: string,
    message: string
}



const Contact = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    
    const sendEmail = async() => {
        let response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
                service_id:'service_sendMayMail',
                template_id:'template_3xee6oo',
                user_id:'HsQHfaMdowVf3yExq',
                template_params:{
                    name: name,
                    email: email,
                    message: message
                }
            },{
                headers:{'Content-Type': 'application/json'}
        })
    }

    return (
        <>
        <div className={styles.form}>
            <h2>Contact</h2>
            <form action='/contact'>
            <input required type='text' id='name' placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br/>
            <input required type='email' id='email' placeholder='E-mail adress' onChange={(e)=>setEmail(e.target.value)}/><br/>
            <textarea required id='message' placeholder='Write you message here' onChange={(e)=>setMessage(e.target.value)}/>
            <input className={styles.button} type='submit' value='Submit' onClick={() => sendEmail()}/>
            </form>
        </div>
        </>
    );
}

export default Contact;