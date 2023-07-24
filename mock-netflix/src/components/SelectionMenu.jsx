import React from 'react';

import styles from '../styles';

const SelectionMenu = () => {
  const [selectedOption, setSelectedOption] = React.useState('option1');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={`${styles.flexCenter} p-4`}>
      <label
        htmlFor="selection"
        className="font-semibold mr-2 block text-white font-lato">
        Language:
      </label>
      <select
        id="selection"
        className="block font-lato font-bold appearance-none w-full h-1/4 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleOptionChange}>
        <option value="option1">English</option>
        <option value="option2">Filipino</option>
      </select>
    </div>
  );
};

export default SelectionMenu;
