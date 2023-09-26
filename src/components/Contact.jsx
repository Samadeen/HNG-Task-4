import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animation_ln0em7xl.json';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert('Message Sent!');
  };

  return (
    <div className='w-[85vw] mx-auto" flex flex-row-reverse justify-between'>
      <Lottie animationData={animationData} />
      <div className=''>
        <h2
          onClick={() => onSectionChange(3)}
          className='text-5xl font-bold mt-24'
        >
          Contact me
        </h2>
        <div className='mt-8 p-8 rounded-md bg-white w-96 max-w-full'>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor='name'
              className='font-medium text-gray-900 block mb-1'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
              required
            />
            <label
              htmlFor='email'
              className='font-medium text-gray-900 block mb-1 mt-8'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
              required
            />
            <label
              htmlFor='message'
              className='font-medium text-gray-900 block mb-1 mt-8'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
              required
            />
            <button
              className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 '
              onClick={() => submitted && handleSubmit()}
            >
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
