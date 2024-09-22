import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../hooks/useAuthContext';
import Navbar from '../components/Navbar';

export const EditGrantPage = ({ grantToEdit }) => {
    //Set all user input to empty string on initial render
    const [foundation, setFoundation] = useState(grantToEdit.foundation);
    const [notes, setNotes] = useState(grantToEdit.notes);
    const [date, setDate] = useState(grantToEdit.date);
    const [ask, setAsk] = useState(grantToEdit.ask);
    const [award, setAward] = useState(grantToEdit.award);
    const [currStatus, setCurrStatus] = useState(grantToEdit.currStatus);

    const redirect = useNavigate();
    const {user} = useAuthContext()

    const editGrant = async () => {
        if (!user) {
            console.log('You must be logged in')
            return
        }

        const response = await fetch(`/grants/edit/${grantToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                foundation: foundation,
                notes: notes,
                date: date,
                ask: ask,
                award: award,
                currStatus: currStatus
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });
            if (response.status === 200) {
                alert(`Grant successfully edited`);
            } else {
                const errMessage = await response.json();
                alert(`Error occurred while trying to edit grant: ${response.status}. ${errMessage.Error}`);
            }
            redirect("/grants");
        }

        return (
            <>
            <Navbar />
            <div id="form-div" class="border py-3 px-5">
                <h2>Edit grant details.</h2>
                <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <div class="mb-3 row px-5">
                        <label for="foundation">Foundation Name</label>
                        <input
                            type="text"
                            placeholder="Name of foundation"
                            value={foundation}
                            onChange={e => setFoundation(e.target.value)}
                            id="foundation" />
                    </div>
                    <div class="mb-3 row px-5">
                        <label for="notes">Notes</label>
                        <textarea
                            maxLength="250"
                            rows="4"
                            placeholder="Enter notes about grant's area of focus or requirements"
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            id="notes"/>
                    </div>
                    <div class="mb-3 row px-5">
                        <label for="date">Date Due</label>
                        <input
                            type="date"
                            placeholder="Deadline date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            id="date"/>
                    </div>
                    <div class="mb-3 row px-5">
                        <label for="ask">Ask Amount</label>
                        <input
                            type="text"
                            placeholder="Amount of money requested"
                            value={ask}
                            onChange={e => setAsk(e.target.value)}
                            id="ask"/>
                    </div>
                    <div class="mb-3 row px-5">
                        <label for="award">Award Amount</label>
                        <input
                            type="text"
                            placeholder="Amount of money awarded"
                            value={award}
                            onChange={e => setAward(e.target.value)}
                            id="award"/>
                    </div>
                    <div class="mb-3 row px-5">
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
                            class="btn btn-success btn-lg mb-3"
                            onClick={editGrant}
                            id="submit"
                        >Save updates</button>
                        </label>
                    </div>
                </fieldset>
            </form>
            </div>
            </>
        );
    }

    export default EditGrantPage;
