import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GrantList from '../components/GrantList';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function GrantsPage({ setGrant }) {
    const redirect = useNavigate();
    const [grants, setGrants] = useState([]);
    const {user} = useAuthContext()

    // Retrieve entire list of grants
    const loadGrants = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/grants/all', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const grants = await response.json();
        setGrants(grants);
    }

    // Update a grant
    const onEditGrant = async grant => {
        setGrant(grant);
        redirect("/update");
    }

    // Delete a grant
    const onDeleteGrant = async _id => {
        if (!user) {
            return
        }

        const response = await fetch(`/grants/delete/${_id}`, { 
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });

        if (response.status === 200) {
            const getResponse = await fetch('/grants/all', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const grants = await getResponse.json();
            setGrants(grants);
        } else {
            console.error(`Entry with following id could not be deleted = ${_id}, status code = ${response.status}`)
        }
    }

    // Load all grants
    useEffect(() => {
        loadGrants();
    }, []);

    // Display grants
    return (
        <>
            <Navbar />
            <Link to="/create">
                <button type="button" class="btn btn-success btn-lg mb-3">Add Grant</button>
            </Link>
            <GrantList
                grants={grants}
                onEdit = {onEditGrant}
                onDelete={onDeleteGrant}
            />
        </>
    );
}

export default GrantsPage;
