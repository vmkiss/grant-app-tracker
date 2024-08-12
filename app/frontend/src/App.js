import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import GrantsPage from './pages/GrantsPage';
import AddGrantPage from './pages/AddGrantPage';
import EditGrantPage from './pages/EditGrantPage';

// Define function that renders the content in Routes
function App() {

    const [grant, setGrantToEdit] = useState([])

    return (
        <>
        <BrowserRouter>

            <header>
                <h1>Grant Application Tracker</h1>
            </header>

            <main>
                <section>
                    <Routes>
                    <Route path="/" element={<GrantsPage setGrant={setGrantToEdit}/>} />
                    <Route path="/create" element={<AddGrantPage />} /> 
                    <Route path="/update" element={<EditGrantPage grantToEdit={grant} />} />  
                    </Routes>
                </section>
            </main>

            <footer>
            <p><p>&copy; 2024 Veronika Kiss</p></p>
          </footer>

        </BrowserRouter>
        </>
    );
}

export default App;