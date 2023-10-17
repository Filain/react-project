import React, {useEffect} from 'react';

import {RickAndMorty} from "./rickAndMorty/RickAndMorty";
import {Simpsons} from "./simpson/Simpsons";
import {findAllByDisplayValue} from "@testing-library/react";


const App = () => {
    return (
        <>
        <div><Simpsons/></div>
        <div><RickAndMorty/></div>
        </>
    );
};
export  {App};