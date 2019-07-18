import React from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const OutputTextComponent = (props) => {
  const { outputValue } = props.data;

  return ( 
    <InputGroup className="mb-3">
      <FormControl
        id="outputCopy"
        name="outputValue"
        type="text"
        value={outputValue}
        className="inputs"
        placeholder="Output"
        readOnly="readOnly"
        style={{backgroundColor: "rgb(245, 245, 245)"}}
      />
      <InputGroup.Append>
        <Button 
          variant="outline-secondary" 
          onClick={props.handleCopy}
          style={{borderColor: "rgb(204, 204, 204)"}}>
          <span role="img" aria-label="copy">&#128203;</span>
        </Button>
      </InputGroup.Append>
    </InputGroup>
   );
}
 
export default OutputTextComponent;