import React from 'react';

export function BoilingVerdict(props) {
    
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }

    return <p>The water would NOT boil.</p>;
}
