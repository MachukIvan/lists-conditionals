import React from 'react';


const ValidationComponent = (props) => {
    let textLengthValidator;
    if (props.textLength < 5) {
        textLengthValidator = 'Text too short';
    } else {
        textLengthValidator = 'Text long enough';
    }

    return (
        <p>{textLengthValidator}</p>
    )
}

export default ValidationComponent;