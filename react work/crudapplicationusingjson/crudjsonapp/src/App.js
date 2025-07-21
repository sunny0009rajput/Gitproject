import React from 'react';
import './App.css';
import {Container, Typography, Button, Dialog, DialogTitle} from "@mui/material";
import axios from "axios"; 
import { useState, useEffect } from 'react';
import UserForm from './component/UserForm';
import UserTable from './component/UserTable';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd =async (user) => {
    try{
      const response = await axios.post('http://localhost:5000/users', user);
      fetchUsers();
      } catch (error)  {
        console.error("Error adding user:", error);
    }};

    const handleUpdate = async (user) => {
      try {
        const response = await axios.put(`http://localhost:5000/users/${user.id}`, user);
        fetchUsers();
        setEditingUser(null);
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setOpenDialog(true);
  };
    
  const handleAddClick = () => {
    setEditingUser(null);
    setOpenDialog(true);
  };  




  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        user management crud application
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddClick}
        sx={{ mb: 2 }}
      >
        Add User
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}> 
        <DialogTitle>{editingUser ? 'Update User' : 'Add User'} </DialogTitle>
        <UserForm
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      editingUser={editingUser}
      onClose={() => setOpenDialog(false)}/>
      </Dialog>

      


      <UserTable
      users={users}
      onEdit={handleEditClick}
      onDelete={handleDelete}/>
    </Container>
  );
}

export default App;
