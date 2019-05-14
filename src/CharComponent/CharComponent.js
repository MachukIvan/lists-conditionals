import React  from 'react';
import './CharComponent.css';


const CharComponent = (props) => {
    let chars = props.text.split('').map((char, index) => {
        return (
            <div className="CharWrap" onClick={() => props.deleteChar(index)}>{char}</div>
        )
    });
    
    return chars;
}

export default CharComponent;