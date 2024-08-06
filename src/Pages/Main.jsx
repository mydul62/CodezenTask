import React, { useState } from 'react';
import CustomSelect from '../Components/CustomSelect';

const Main = () => {  
const [open, setOpen] = useState(false);
const isMulti = true;
const isSearchable = true;
const isClearable = true;
const isDisabled = false;
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
  const handleMenuOpen = (arg) => {
    setOpen(arg);
  };
  return (
    <div>
      <CustomSelect
        options={options}
        isMulti={isMulti}
        isSearchable={isSearchable}
        isClearable = {isClearable}
        isGrouped
        open={open}
        onMenuOpen={handleMenuOpen}
        isDisabled={isDisabled}
        placeholder="Select a fruit or vegetable"
        onChangeHandler={handleChange}
      />
    </div>
  );
};

export default Main;
