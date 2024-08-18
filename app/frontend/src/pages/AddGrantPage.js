import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddGrantPage = () => {
    // Set all user input to empty string on initial render
    const [foundation, setFoundation] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');
    const [ask, setAsk] = useState('');
    const [award, setAward] = useState('$0');
    const [currStatus, setCurrStatus] = useState('Not submitted yet');

    const redirect = useNavigate();

    // Add new grant to database using values from user input
    const addGrant = async () => {
        const newGrant = { foundation, notes, date, ask, award, currStatus };
        const response = await fetch('/grants/create', {
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
        redirect("/grants");
    };

    return (
        <>
        <div id="form-div" class="border py-3 px-5">
            <h2>Complete all fields to add a new grant.</h2>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <div class="mb-3 row">
                        <label for="foundation">Foundation Name</label>
                        <input
                            type="text"
                            placeholder="Name of foundation"
                            value={foundation}
                            onChange={e => setFoundation(e.target.value)}
                            id="foundation" />
                    </div>
                    <div class="mb-3 row">
                        <label for="notes">Notes</label>
                        <input
                            type="text"
                            placeholder="Enter notes about grant's area of focus or requirements"
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            id="notes"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="date">Date Due</label>
                        <input
                            type="date"
                            placeholder="Deadline date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="ask">Ask Amount</label>
                        <input
                            type="text"
                            placeholder="Amount of money requested"
                            value={ask}
                            onChange={e => setAsk(e.target.value)}
                            id="ask"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="award">Award Amount</label>
                        <input
                            type="text"
                            placeholder="Amount of money awarded"
                            value={award}
                            onChange={e => setAward(e.target.value)}
                            id="award"/>
                    </div>
                    <div class="mb-3 row">
                        <label for="status">Current Status</label>
                        <select
                            value={currStatus}
                            onChange={e => setCurrStatus(e.target.value)} 
                            >
                            <option value="Not submitted yet">Not submitted yet</option>
                            <option value="Submitted">Submitted</option>
                            <option value="Awarded">Awarded</option>
                            <option value="Declined">Declined</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-center">
                        <label for="submit">
                        <button
                            class="btn btn-success btn-lg"
                            type="submit"
                            onClick={addGrant}
                            id="submit"
                        >Add grant</button>
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    );
}

export default AddGrantPage;
