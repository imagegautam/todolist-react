import { useState } from 'react'
import { Form } from './components/Form'

import './App.css'
import { Table } from './components/Table'


function App() {
  const [entryList, setEntryList] = useState([]);
  const tWkHr = 7*24;

  const addNewTask = (taskObj) =>{

    if (ttlHr + taskObj.hr > tWkHr){
      return alert ("Sorry there is no hours left to add extra hour");

    }

    setEntryList([...entryList, taskObj]);

  }

  const switchTask = (id, type) =>{
    const tempArg = entryList.map((item) =>{
      if(item.id === id) item.type = type;

      return item;
    });

    setEntryList(tempArg);
  };
  const ttlHr = entryList.reduce((acc, item) => {
    return acc +  +item.hr;
  }, 0);

  const handOnDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete the item?")) {
      setEntryList(entryList.filter((item) => item.id !== id));
    }
  };

  return (
   <div className='container pt-5'>
    <h1 className='pt-5 text-center'>To Do List</h1>
   <Form  addNewTask = {addNewTask}/>

   <Table 
   entryList ={entryList}
   switchTask={switchTask}
   handOnDelete={handOnDelete}/>

   <div className="alert alert-success">The total hours allocated = <span id="ttlHrs">{ttlHr}</span>hrs</div>
   </div>
  )
}

export default App
