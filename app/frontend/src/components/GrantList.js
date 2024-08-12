import React from 'react';
import Grant from './Grant';
import 'bootstrap/dist/css/bootstrap.css';

// Return table with list of all grants
function GrantList({ grants, onDelete, onEdit }) {
    return(
        <table id="grants" class="table table-hover">
            <thead class="table-group-divider">
                <tr class= "table-success table-group-divider">
                    <th>Foundation Name</th>
                    <th>Notes</th>
                    <th>Due Date</th>
                    <th>Ask Amount</th>
                    <th>Award Amount</th>
                    <th>Current Status</th>
                    <th></th>
                    <th></th>
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