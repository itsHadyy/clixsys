import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation (basic example)
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields!");
            return;
        }

        // Simulate a form submission
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="contactContainer01">
            <div className="contactContainer02">
                <div className="contact-container">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">
                        Have a question or need a quote? Reach out to us, and we'll get back to you shortly!
                    </p>

                    {submitted ? (
                        <div className="success-message">
                            <h2>Thank you!</h2>
                            <p>Your request has been submitted successfully. We’ll get in touch with you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message or request"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                required
                            /> <br></br>

                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;