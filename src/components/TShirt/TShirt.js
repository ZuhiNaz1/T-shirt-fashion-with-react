import React from 'react';

const TShirt = ({tshirt}) => {
    const {picture, name} = tshirt;
    return (
        <div>
            <img src={picture}></img>
        </div>
    );
};

export default TShirt;