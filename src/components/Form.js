import React from 'react'
import { useState } from 'react';
import { send } from 'emailjs-com';
import "./Form.css";

const Form = () => {
    const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
     
    e.preventDefault();
    setToSend({ 
        from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
    
    });
    alert("Done!Successfully sent!");
    send(
      'service_r0n7u7j',
      'template_39wz0l8',
      toSend,
      'user_Cc9HrT1yVvzY6b2AfOkdv'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
    return (

       
        <div className="formm">
         <h1>Contact us</h1>
            <form onSubmit={onSubmit}>
  <input
    type='text'
    required
    name='from_name'
    placeholder='from name'
    value={toSend.from_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='to_name'
    required
    placeholder='to name'
    value={toSend.to_name}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    required
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
  <input
    type='text'
    name='reply_to'
    required
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <button type='submit'>Submit</button>
</form>
        </div>
    )
}

export default Form
