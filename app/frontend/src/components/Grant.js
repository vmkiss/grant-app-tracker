import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

// Return table row displaying information for one grant and edit/delete icons
function Grant({ grant, onEdit, onDelete }) {
    return (
        <tr>
            <td>{grant.foundation}</td>
            <td>{grant.notes}</td>
            <td>{grant.date.slice(0, 10)}</td>
            <td>{grant.ask}</td>
            <td>{grant.award}</td>
            <td>{grant.currStatus}</td>

            <td><MdDeleteForever onClick={() => onDelete(grant._id)} /></td>
            <td><MdEdit onClick={() => onEdit(grant)} /></td>
        </tr>
    );
}

export default Grant;