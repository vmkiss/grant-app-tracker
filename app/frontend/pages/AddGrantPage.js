import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddGrantPage = () => {
    // Set all user input to empty string on initial render
    const [foundation, setFoundation] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');
    const [ask, setAsk] = useState('');
    const [award, setAward] = useState('');
    const [currStatus, setCurrStatus] = useState('');

    const redirect = useNavigate();

    const addGrant
}
