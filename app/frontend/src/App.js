import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import GrantsPage from './pages/GrantsPage';
import AddGrantPage from './pages/AddGrantPage';
import EditGrantPage from './pages/EditGrantPage';
import Login from './pages/LogIn';
import Signup from './pages/SignUp';
import Navbar from './components/Navbar';

// Define function that renders the content in Routes
function App() {

    const [grant, setGrantToEdit] = useState([])

    return (
        <>
        <BrowserRouter>
           {/* <Navbar /> */}
            <header>
            </header>

            <main>
                <section>
                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/grants" element={<GrantsPage setGrant={setGrantToEdit}/>} />
                    <Route path="/create" element={<AddGrantPage />} /> 
                    <Route path="/update" element={<EditGrantPage grantToEdit={grant} />} />  
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/signup" element={<Signup />} /> 
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
        </>
    );
}

export default App;