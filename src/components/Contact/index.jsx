import React,{useState} from 'react'
import "./contact.css"
import emailjs from 'emailjs-com'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      message: '',
    };
  
    if (!formData.name.trim()) {
      valid = false;
      errors.name = 'Name is required';
    }
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      valid = false;
      errors.email = 'Please enter a valid email address';
    }
  
    if (!formData.message.trim()) {
      valid = false;
      errors.message = 'Message is required';
    }
  
    setFormErrors(errors);
    return valid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using Email.js
      emailjs.send('service_60c2w5m', 'template_4vptjz9', formData, '5I1O9hQMZbAQXSKAS')
        .then((response) => {
          console.log('Email sent!', response);
          // You can handle success messages or redirection after successful submission here
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Handle errors here, like displaying an error message to the user
        });
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Clear related form error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    }
  };
  return (
    <div className="formShit">
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>
      <div>
        <label className="label" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default Contact