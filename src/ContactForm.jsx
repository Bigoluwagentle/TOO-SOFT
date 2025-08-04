import { useCart } from "./CartContent";

import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const { cartItems } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    email: "",
  });

  const yourPhoneNumber = "2349058704410";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productList = cartItems.map(
      (item, index) => `${index + 1}. ${item.category} (x${item.quantity})`
    ).join("\n");

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ).toFixed(2);

    const message = `New Order Request:\n\nProducts:\n${productList}\n\nTotal: ₦${total}\n\nCustomer Info:\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nEmail: ${form.email}`;

    const whatsappLink = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div id="mainForm">
        <div id="contactForm">
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <button type="submit">Send to WhatsApp</button>
            </form>
        </div>
    </div>
    
  );
};

export default ContactForm;
