import { useState } from 'react';

import { Button, styles } from '../ui';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    validateEmail(value);
  };

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(inputEmail);
    setIsValid(isValidEmail);
  };

  return (
    <section className="flex flex-col mb-56">
      <p className="font-sans text-xl text-white mt-10 mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      {!isValid && (
        <span className="text-red-500 text-xs ml-14 italic mb-1 font-lato">
          Invalid Email Format
        </span>
      )}
      <div className={`${styles.flexBetween} flex-row w-full px-10`}>
        <div className="flex flex-col flex-1 mr-5">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your e-mail address"
            className="text-white font-sans font-semibold text-base p-4 w-full bg-[rgba(44,44,44,0.5)]
            border border-gray-400 rounded-sm"
            required
          />
        </div>
        <Button title="Get Started" />
      </div>
    </section>
  );
};

export default Newsletter;
