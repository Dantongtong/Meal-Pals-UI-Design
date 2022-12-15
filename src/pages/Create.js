import * as React from 'react';
import UpperFrame from './UpperFrame';
import LowerFrame from './LowerFrame';

export default function Create() {
    return (
        <div>
            <UpperFrame />
            <div>Event Information</div>
            
            <LowerFrame />
        </div >
    );
}