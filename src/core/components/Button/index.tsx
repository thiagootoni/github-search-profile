import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text} : Props) =>(

    <button className="btn-styled bd-radius-4">
        {text}
    </button>
);

export default Button;