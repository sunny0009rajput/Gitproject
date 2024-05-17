import React from "react";
import "./ToDoList.css";
const ToDolIst = (props) => {
  return (
    <>
    
      <div class="container text-left">
  <div class="row">
    <div class="col">
    <i class="fa-sharp fa-solid fa-trash" id="deletebutton" onClick={()=>{
      props.onSelect(props.id);
    }}></i>
    </div>
    <div class="col-10" id="listdata">
    <li id="listdata"> {props.datalist}</li>
    </div>
    
  </div>
  
</div>
    </>
  );
};
export default ToDolIst;
