import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().slice(0, 16),
    description: "",
  });

  const form = useRef();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_x301fjc",
        "template_i22nrmn",
        form.current,
        "_9a96u8R0ads8R2oE"
      );
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: new Date().toISOString().slice(0, 16),
        description: "",
      });
    } catch (error) {
      console.error("There was an error sending the email:", error);
      alert("Failed to send the form. Please try again.");
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <p className="text-gray-600 text-sm leading-relaxed">
        Completează formularul în vederea programării unui consult sau tratament
        și noi te vom contacta telefonic pentru confirmare.
      </p>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nume și Prenume"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner-3d hover:shadow-3d"
            required
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresă de Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner-3d hover:shadow-3d"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Număr de telefon"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner-3d hover:shadow-3d"
            required
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Data și ora dorită:
          </label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().slice(0, 16)}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-inner-3d hover:shadow-3d"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Alte precizări:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none shadow-inner-3d hover:shadow-3d"
            placeholder="Descrie procedura dorită sau alte detalii importante..."
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-white rounded-full bg-gradient-to-r from-purple-500 to-slate-900 text-lg py-4 font-bold hover:animate-pulse-3d"
      >
        Programează-te
      </button>
    </form>
  );
};
