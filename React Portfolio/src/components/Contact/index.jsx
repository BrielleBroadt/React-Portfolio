import React from 'react'
import "./contact.css"

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
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
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



const Contact = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
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
        <label htmlFor="email">Email</label>
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
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Contact