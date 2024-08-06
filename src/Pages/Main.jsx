import React from 'react';
import CustomSelect from '../Components/CustomSelect';

const Main = () => {
const isMulti = false;
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'grape', label: 'Grape', group: 'Fruits' },
    { value: 'carrot', label: 'Carrot', group: 'Vegetables' },
    { value: 'lettuce', label: 'Lettuce', group: 'Vegetables' }
  ];

  const handleChange = (selectedValue) => {
    console.log(selectedValue);
  };

  return (
    <div>
      <CustomSelect
        options={options}
        isMulti={isMulti}
        isSearchable
        isGrouped
        placeholder="Select a fruit or vegetable"
        onChangeHandler={handleChange}
      />
    </div>
  );
};

export default Main;
