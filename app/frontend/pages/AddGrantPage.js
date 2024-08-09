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

    const addGrant = async () => {
        const newGrant = { foundation, notes, date, ask, award, currStatus };
        const response = await fetch('/movies', {
            method: 'post',
            body: JSON.stringify(newGrant),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`Grant successfully added`);
        } else {
            alert(`Error occurred while trying to add grant`);
        }
        redirect("/");
    };

    return (
        <>
        <div>
            <h2>Add a grant</h2>
            <p>Complete the fields to add a new grant</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Grant Details</legend>
                    <label for="foundation">Foundation Name</label>
                    <input
                        type="text"
                        placeholder="Name of foundation"
                        value={foundation}
                        onChange={e => setFoundation(e.target.value)}
                        id="foundation" />
                    <label for="notes">Notes</label>
                    <input
                        type="text"
                        placeholder="Enter notes about grant's area of focus or requirements"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        id="notes"/>
                </fieldset>
            </form>
        </div>
        </>
    )}
