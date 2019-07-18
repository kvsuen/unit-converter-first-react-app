import React from 'react';

const InputTextComponent = (props) => {
  const { inputValue } = props.data;

  return ( 
    <input
      name="inputValue"
      type="text"
      value={inputValue}
      className="inputs"
      placeholder="Enter value"
      onChange={props.handleInputChange}
    />
   );
}
 
export default InputTextComponent;