import React, {Component} from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  color: #7e24fa;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border: 1px solid #7e24fa;
    border-radius: 3px;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    display: none;
    background-color: #7e24fa;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
`;


export default class Checkbox extends Component {
    render() {
        const {label, ...props} = this.props;

        return <CheckboxContainer>
            <input {...props}/>
            {label}
            <span className="checkmark"/>
        </CheckboxContainer>
    }
}