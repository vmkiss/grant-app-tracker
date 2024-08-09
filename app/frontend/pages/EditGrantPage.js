import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGrantPage = ({ grantToEdit }) => {
    //Set all user input to empty string on initial render
    const [foundation, setFoundation] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');
    const [ask, setAsk] = useState('');
    const [award, setAward] = useState('');
    const [currStatus, setCurrStatus] = useState('');

    const redirect = useNavigate();

    const editGrant = async () => {
        const response = await fetch(`/grants.${grantToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                foundation: foundation,
                notes: notes,
                date: date,
                ask: ask,
                award: award,
                currStatus: currStatus
            }),
            headers: {'Content-Type': 'application/json',},
        });
            if (response.status === 200) {
                alert(`Grant successfully edited`);
            } else {
                const errMessage = await response.json();
                alert(`Error occurred while trying to edit grant: ${response.status}. ${errMessage.Error}`);
            }
            redirect("/");
        }

        return (
            <>
            <div>
                <h2>Edit a grant</h2>
                <p>Complete the fields to edit the grant.</p>
            </div>
            </>
        )

    }
