import React from 'react';

export const App = () => {

    const imHappy = false;
    const element = imHappy 
    ? <h1>I'm happy! 😄</h1>
    : <h1>I'm not happy! 😞</h1>

    return (
        element
    )
};