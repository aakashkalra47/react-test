import React from 'react';
import { connect } from 'react-redux';
import { inputChange } from "../actions/index";
const ComponentA=(props)=>{
    const onChange=(event)=>{
        props.inputChange(event.target.value);
    }
    return (
        <div>
            <input className="form-control" type="text" name="name" onChange={onChange} />
        </div>
    )
}
export default connect(null,{inputChange})(ComponentA);
