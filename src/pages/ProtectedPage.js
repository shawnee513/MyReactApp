import React from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedPage =() => {
    const isAuthed = false;

    return isAuthed
    ? (
        <h1>Only authorized users can see this</h1>
    ): (
        <Redirect to="/" />
    )
}