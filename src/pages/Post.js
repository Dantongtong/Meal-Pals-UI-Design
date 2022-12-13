import * as React from 'react';
import { Link } from 'react-router-dom';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';

export default function Post() {  
    return (
    <div>
        <UpperFrame/>
        <div>hi</div>
        <Link to='/'>hello</Link>
        <LowerFrame/>
    </div>
    );
}