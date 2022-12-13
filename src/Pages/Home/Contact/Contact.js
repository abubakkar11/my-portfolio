import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uqmi3lh', 'template_4iuq2bi', form.current, 'XqZ0yD3LpznAqJb8d')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent")
          toast.success('Message send successFully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className='mt-10'>
    <h2 className="text-3xl">Contact Me</h2>
      <div className='border block p-24 mt-5 rounded-md shadow-md bg-indigo-300 text-black '>
        <form className='ml-34' ref={form} onSubmit={sendEmail}>
      <input className="input input-bordered mt-3 ml-52 w-1/2" placeholder='Name' type="text" name="user_name" /><br />
      <input className="input input-bordered mt-3 ml-52 w-1/2 " placeholder='Your Email' type="email" name="user_email" /><br />
      <textarea className="textarea w-1/2 ml-4 mt-3 ml-52 textarea-bordered" placeholder='Message' name="message" /><br />
      <input className='btn btn-primary ml-96 mt-5' type="submit" value="Send" />
    </form>
    </div>
  </div>
  );
};

export default Contact;


  