import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_byo8f4f', 'template_n3ny1gj', form.current, 'ckR9eKxJiKYOxGVFw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form className='w-[75%] mx-auto' ref={form} onSubmit={sendEmail}>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name='user_name'class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <input type="text" name='user_email' placeholder="password" class="input input-bordered" />
               
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <textarea type="text" name='message' placeholder="password" class="input input-bordered" />
               
            </div>
            <div class="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="send" />
            </div>
        </form>
      
    );
  };

export default Contact;