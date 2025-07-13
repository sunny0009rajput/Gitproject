
import "./App.css";
import React, { useState } from "react";

import {Container, TextField, Button, List, ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = ()=>{
    if(newTask.trim()){
      if(editIndex !== null){
        const updateTasks = [...tasks];
        updateTasks[editIndex]=newTask;
        setTasks(updateTasks);
        setEditIndex(null);
      }else{
        setTasks([...tasks,newTask]);
      }
      setNewTasks('');
    }
  };

  const handleDeleteTask = (index)=>{
    const updateTasks= tasks.filter((_,i) => i !== index);
    setTasks(updateTasks);
    if(editIndex === index){
      setNewTasks('');
      setEditIndex(null);
    }
  };

  const handleEditTask = (index)=> {
    setNewTasks(tasks[index]);
    setEditIndex(index);
  };
  

  return (
    <Container maxWidth="sm" style={{marginTop: '2rem'}}>
      <Typography variant="h4" gutterBottom>To-D0 App</Typography>
      <TextField label="new Task" variant="outlined" fullWidth value={newTask} onChange={(e)=> setNewTasks(e.target.value)}/>
      <Button variant="contained" color="primary" fullWidth style={{marginTop: '1rem'}} onClick={handleAddTask}>{editIndex !== null ? 'Update Task' : 'Add Task'}</Button> 
      <List>{tasks.map((task,index)=>(
        <ListItem key={index} secondaryAction={<>
        <IconButton edge="end" onClick={() => handleEditTask(index)}><EditIcon/></IconButton>
        <IconButton edge="end" onClick={()=> handleDeleteTask(index)}><DeleteIcon/></IconButton>
        </>}
        >
          <ListItemText primary={task}/>
        </ListItem>
      ))}</List> 

    </Container>
  );
}

export default App;
