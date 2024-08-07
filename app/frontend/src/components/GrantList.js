import React from 'react';
import Grant from './Grant';

// Return table with list of all grants
function GrantList({ grants, onDelete, onEdit }) {
    return(
        <table id="grants">
            <caption>Add and Edit Grants</caption>
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