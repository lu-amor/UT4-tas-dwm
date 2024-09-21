import React, { useState, useEffect } from 'react';

const ApiInteractorComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>usuarios</h1>
            <ol>
                {users.map(user => (
                    <li key={user.id}>
                        nombre: {user.name} <br />
                        mail: {user.email}
                        <br /><br />
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ApiInteractorComponent;