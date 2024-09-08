import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';

//@SMTPClient1

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    description: "",
  });

  const form = useRef(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {

       // Format the date before sending
       const formattedDate = formData.date.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    setFormData((prevData) => ({
      ...prevData,
      formattedDate,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
      await emailjs.sendForm(
        'service_bltxcse', 
        'template_rc4v1cp', 
        form.current, 
        'pz31gQ54K-Ek5pHdE'
      );
      console.log('Email successfully sent!');
      alert('Form submitted successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        description: "",
      });
    } catch (error) {
      console.error('There was an error sending the email:', error);
      alert('Failed to send the form. Please try again.');
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto text-sm font-roboto p-4 bg-white shadow-md rounded-lg">
    <label htmlFor="form" className="block text-gray-700 mb-2">
    Completează formularul în vederea programării unui consult sau tratament și noi te vom contacta telefonic pentru confirmare. 
    </label>
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nume si Prenume"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-900 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresă de Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Numar de telefon"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
     <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()} // Prevent selecting past dates
              className="w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none focus:ring"
            />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 mb-2">Alte precizări:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border text-gray-900 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-tr from-gray-600 to-fuchsia-950 border-gray-200 text-white text-lg py-4 px-6 rounded-3xl hover:bg-fuchsia-900 transition duration-200"
      >
        Programează-te
      </button>
    </form>
  );
};

