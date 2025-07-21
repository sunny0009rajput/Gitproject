import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';

function UserForm({onAdd, onUpdate, editingUser, onClose }) {
    const [user, setUser] = useState({name: '', email: '', age:''});

    useEffect(() => {
        if (editingUser) {
            setUser(editingUser);
        } else {
            setUser({name: '', email: '', age:''});
        }
    }, [editingUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            onUpdate(user);
        } else {
            onAdd(user);
        }
        onClose();
        setUser({name: '', email: '', age:''});
    };
  return (
    <Box component={'form'} onSubmit={handleSubmit} sx={{ mb: 2 }}>
        <TextField 
        label="Name"
        value={user.name}
        onChange={(e) => setUser({...user, name: e.target.value})}
        required
        fullWidth
        sx={{ mb: 2, mr: 1 }}
        />
        <TextField 
        label="Email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})} 
        required
        fullWidth
        sx={{ mb: 2, mr: 1 }}
        />
        <TextField
        label="Age"
        value={user.age}
        onChange={(e) => setUser({...user, age: e.target.value})}
        required
        type="number"
        fullWidth
        sx={{ mb: 2, mr: 1 }}
        />
        <Button 
        type="submit"
        variant="contained"
        sx={{ mb: 2 }}
        >
            {editingUser ? 'Update User' : 'Add User'}
        </Button>   
    </Box>
    );

}

export default UserForm