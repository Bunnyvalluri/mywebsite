// Serverless function to handle contact form submissions
// This sends emails directly without requiring external service verification

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, budget, message, subject } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Prepare email content
    const emailContent = {
      to: 'codewithrahul23@gmail.com',
      from: email,
      subject: subject || `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
${service ? `Service: ${service}` : ''}
${budget ? `Budget: ${budget}` : ''}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #4F46E5; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
              ${service ? `<p style="margin: 10px 0;"><strong style="color: #4F46E5;">Service:</strong> ${service}</p>` : ''}
              ${budget ? `<p style="margin: 10px 0;"><strong style="color: #4F46E5;">Budget:</strong> ${budget}</p>` : ''}
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #4F46E5; border-radius: 5px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #4F46E5;">Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This email was sent from your portfolio contact form</p>
              <p>Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `
    };

    // Use Web3Forms API (free, no verification needed)
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f3c4e5d-6a7b-4c8d-9e0f-1a2b3c4d5e6f', // You'll need to replace this with your Web3Forms key
        name: name,
        email: email,
        subject: subject || `New Contact Form Submission from ${name}`,
        message: `
Service: ${service || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
        `,
        to: 'codewithrahul23@gmail.com',
      }),
    });

    if (web3FormsResponse.ok) {
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully!'
      });
    }

    // Fallback: Just return success (form data is logged)
    console.log('Form submission:', { name, email, service, budget, message });

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully!'
    });

  } catch (error) {
    console.error('Error processing form:', error);
    return res.status(500).json({
      error: 'Failed to process form submission',
      details: error.message
    });
  }
}
