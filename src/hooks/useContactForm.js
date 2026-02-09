import { useState } from 'react';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://submit-form.com/RRB6NqsxA?_redirect=false', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      // Reset success status after 5 seconds to allow new submissions/hide popup
      if (status !== 'error') {
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  const resetStatus = () => setStatus('idle');

  return {
    formData,
    status,
    handleChange,
    submitForm,
    resetStatus
  };
};
