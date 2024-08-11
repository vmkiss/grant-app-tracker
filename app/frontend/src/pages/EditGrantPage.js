import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditGrantPage = ({ grantToEdit }) => {
    //Set all user input to empty string on initial render
    const [foundation, setFoundation] = useState(grantToEdit.foundation);
    const [notes, setNotes] = useState(grantToEdit.notes);
    const [date, setDate] = useState(grantToEdit.date);
    const [ask, setAsk] = useState(grantToEdit.ask);
    const [award, setAward] = useState(grantToEdit.award);
    const [currStatus, setCurrStatus] = useState(grantToEdit.currStatus);

    const redirect = useNavigate();

    const editGrant = async () => {
        const response = await fetch(`/grants/${grantToEdit._id}`, {
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
                    <label for="date">Date Due</label>
                    <input
                        type="text"
                        placeholder="Deadline date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date"/>
                    <label for="ask">Ask Amount</label>
                    <input
                        type="text"
                        placeholder="Amount of money requested"
                        value={ask}
                        onChange={e => setAsk(e.target.value)}
                        id="ask"/>
                    <label for="award">Award Amount</label>
                    <input
                        type="text"
                        placeholder="Amount of money awarded"
                        value={award}
                        onChange={e => setAward(e.target.value)}
                        id="award"/>
                    <label for="status">Current Status</label>
                    <input
                        type="text"
                        placeholder="Current status of grant application"
                        value={currStatus}
                        onChange={e => setCurrStatus(e.target.value)}
                        id="status"/>
                    <label for="submit">
                    <button
                        onClick={editGrant}
                        id="submit"
                    >Save</button> updates to grant application</label>
                </fieldset>
            </form>
            </div>
            </>
        );
    }

    export default EditGrantPage;
