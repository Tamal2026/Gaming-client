/* eslint-disable react/no-unescaped-entities */



const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-10 bg-emerald-600 text-white py-2 w-2/4  lg:w-1/6 text-center rounded-lg mx-auto">
        Contact Us
      </h1>
      <div className=" rounded-lg shadow-md p-8">
        <p className="mb-4">
          Have questions or need assistance? Feel free to reach out to us. We're here to help you with any inquiries you may have about our gaming services.
        </p>
        <p className="mb-4">
          You can contact us through the following methods:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Email: <a href="mailto:contact@example.com">Tamal@gmail.com</a>
          </li>
          <li>
            Phone: <a href="tel:+1234567890">+123-456-7890</a>
          </li>
          <li>
            Social Media:
            <a href="https://twitter.com/gamingwebsite" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{' '}
            and{' '}
            <a href="https://www.facebook.com/gamingwebsite" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
        </ul>
        <p className="mt-6">
          We're eager to hear from you and provide any assistance you need. Feel free to contact us anytime, and we'll get back to you as soon as possible.
        </p>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Office Address:</h2>
          <p>123 Gaming Street</p>
          <p>Tejgaon,Dhaka</p>
          <p>Bangladesh</p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Business Hours:</h2>
          <p>Sunday - Thusday: 9:00 AM - 6:00 PM</p>
          <p>Friday - Saturday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
