import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GrantList from '..components/GrantList';
import { Link } from 'react-router-dom';

function GrantsPage({ setGrant }) {
    const redirect = useNavigate();
    const [grants, setGrants] = useState([]);

    // Retrieve entire list of grants
    const loadGrants = async () => {
        const response = await fetch('/movies');
        const grants = await response.json();
        setGrants(grants);
    }

    // Update a grant
    const onEditGrant = async grant => {
        setGrant(grant);
        redirect("/update");
    }


}
