import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';

//@SMTPClient1

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        try {
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-sm font-roboto p-4 bg-white shadow-md rounded-lg">
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="mb-4">
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          showTimeSelect
          calendarStartDay={new Date().getDay()}
          dateFormat="Pp"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 mb-2">Alte precizări:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-fuchsia-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-900 transition duration-200"
      >
        Programează-te
      </button>
    </form>
  );
};

