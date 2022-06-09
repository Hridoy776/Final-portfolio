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
        e.current.reset()
    };

    return (
        <form className='w-[75%] mx-auto' ref={form} onSubmit={sendEmail}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name='user_name' className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='user_email' placeholder="password" className="input input-bordered" />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <textarea type="text" name='message' placeholder="password" className="input input-bordered" />

            </div>
            <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="send" />
            </div>
        </form>

    );
};

export default Contact;