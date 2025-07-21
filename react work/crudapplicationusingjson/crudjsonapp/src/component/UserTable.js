import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Button} from '@mui/material';


function UserTable({users, onEdit, onDelete}) {




  return (
    
      <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow> 

        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => onEdit(user)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
  );
}

export default UserTable