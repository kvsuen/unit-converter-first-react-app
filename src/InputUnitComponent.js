import React from 'react';
import Select from 'react-select'

const InputUnitComponent = (props) => {
  const { inputUnit } = props.data;

  return ( 
    <Select
      name="inputUnit"
      value={inputUnit}
      onChange={props.handleChange}
      options={props.options}
      placeholder="Unit"
    />
   );
}
 
export default InputUnitComponent;