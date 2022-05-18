import React from 'react';
import { Greeting } from '../Greeting';

export const HomePage = () => (
    console.log("home page loading"),
    <>
    <h1>TheHomePage</h1>
    <Greeting name='Shawnee' numberOfMessages={10} />
    </>
);