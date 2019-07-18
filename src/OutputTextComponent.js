import React from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const OutputTextComponent = (props) => {
  const { outputValue } = props.data;
  let outputValueAdjusted = "Error";

  if (!isNaN(outputValue)) {
    outputValueAdjusted = Math.round(outputValue  * 1000000) / 1000000
    if (props.data.inputUnit.value === "celcius [\xB0C]" && props.data.outputUnit.value === "fahrenheit [\xB0F]") {
      outputValueAdjusted = outputValueAdjusted * 9/5 + 32
    } else if (props.data.inputUnit.value === "fahrenheit [\xB0F]" && props.data.outputUnit.value === "celcius [\xB0C]") {
      outputValueAdjusted = (outputValueAdjusted - 32) * 5/9
    }
  }

  return ( 
    <InputGroup>
      <FormControl
        id="outputCopy"
        name="outputValue"
        type="text"
        value={outputValueAdjusted}
        className="inputs"
        placeholder="Output"
        readOnly="readOnly"
        style={{backgroundColor: "rgb(245, 245, 245)"}}
      />
      <InputGroup.Append>
        <Button 
          variant="outline-secondary" 
          onClick={props.handleCopy}
          style={{borderColor: "rgb(204, 204, 204)", paddingLeft: "10px", paddingRight: "10px"}}>
          <span role="img" aria-label="copy">&#128203;</span>
        </Button>
      </InputGroup.Append>
    </InputGroup>
   );
}
 
export default OutputTextComponent;