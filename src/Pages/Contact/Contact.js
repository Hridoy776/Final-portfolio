import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { BsPhoneVibrateFill } from 'react-icons/bs';
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
        <div className='w-[95%]  lg:w-[75%] mx-auto'>
            <p className='text-center my-6 text-2xl uppercase font-bold tracking-widest'>get in touch</p>
            <div className= ' my-12 grid lg:grid-cols-3 gird-cols-1 gap-8  lg:gap-16'>
                <div className='flex flex-col  justify-center items-center border-2 p-4'>
                <FaMapMarkerAlt className='text-xl mb-1'/>
                <p className='text-accent'>Dinajpur, Bangladesh</p>
                </div>
                <div className='flex flex-col  justify-center items-center border-2 p-4'>
                    <RiInboxArchiveFill className="text-xl mb-1" />
                    <p className='text-accent'>hridoy.hstu.che@gmail.com</p>
                </div>
                <div className='flex flex-col  justify-center items-center border-2 p-4'>
                    <BsPhoneVibrateFill className='text-xl mb-1' />
                    <p>+8801795663990</p>
                </div>

            </div>
            <div>
                <form className='w-full lg:w-[80%] grid grid-cols-1 gap-4  items-center justify-center mx-auto' ref={form} onSubmit={sendEmail}>
                    <div className='mx-auto w-[60%] lg:w-[50%] border-b-2' >
                        
                        <input type="name" placeholder="name" name='user_name' className="bg-[#F6FBFF]  focus:outline-none block w-full py-2 text-base uppercase  " />
                    </div>
                    <div className='mx-auto w-[60%] lg:w-[50%] border-b-2' >
                        
                        <input type="text" name='user_email' placeholder="password" className="bg-[#F6FBFF] focus:outline-none block w-full text-base uppercase py-2" />

                    </div>
                    <div className='mx-auto w-[60%] lg:w-[50%] border-b-2' >
                        
                        <textarea type="text" name='message' placeholder="message" className=" focus:outline-none block w-full bg-[#F6FBFF] text-base uppercase py-2" />

                    </div>
                    <div className="mx-auto mt-6">
                        <input className='btn rounded-none px-16  btn-secondary btn-outline ' type="submit" value="send" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Contact;