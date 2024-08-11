import React from 'react';
import Grant from './Grant';

// Return table with list of all grants
function GrantList({ grants, onDelete, onEdit }) {
    return(
        <table id="grants">
            <thead>
                <tr>
                    <th>Foundation Name</th>
                    <th>Notes</th>
                    <th>Due Date</th>
                    <th>Ask Amount</th>
                    <th>Award Amount</th>
                    <th>Current Status</th>
                </tr>
            </thead>
            <tbody>
                {grants.map((grant, i) =>
                <Grant
                    grant={grant}
                    key={i}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />)}
            </tbody>
        </table>
    );
}

export default GrantList