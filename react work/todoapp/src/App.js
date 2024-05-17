import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDolIst from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [itemsList, setitemsList] =useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const addListofItems = ()=>{
    setitemsList((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };
  const deletItems=(id)=>{
    
    setitemsList((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
          return index !== id;
      })
    })
  }

  return (
    // react fragment <>..... </>
    <>
      <div class="container mt-5 text-center" id="contaienrid">
        <div class="row align-items-center">
          <div class="col">
            To Do List app
            <div class="row align-items-center mt-5">
              <div class="col">
                <div class="input-group mb-3">
                  <input
                    placeholder="add a items"
                    type="text"
                    class="form-control"
                    value={inputList}
                    onChange={itemEvent}
                  />
                  <button class="btn btn-primary" id="addbtn" onClick={addListofItems}>
                    
                    ADD
                  </button>
                </div>
                <ul class="list-group">
                  {/* <li class="list-group-item">{inputList}</li> */}
                  {itemsList.map((itemval,index)=>{
                    return(
                      <ToDolIst key={index} id={index} text={itemval} onSelect={deletItems} datalist={itemval}/>
                    ) 
                  })}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
