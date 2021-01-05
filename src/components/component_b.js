import React from 'react';
import {connect} from 'react-redux';
const ComponentB=(props)=>{
    return (
        <div>
            <p className="lead">{props.name.name}</p>
        </div>
    )
}
export default connect((state)=>{
    return {name:state.name}
})(ComponentB);