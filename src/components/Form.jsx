import React, {useState} from 'react'

export const Form = ({addNewTask}) => {
  const [form, setForm] = useState({
    type: "entry",
  });

  // create a function that receives the form data and updates to the local state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'hr' ? + value: value,
    });
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    const obj ={
      ...form, 
      id: randomIdGenerator(),
    };

    addNewTask(obj);
  };

  const randomIdGenerator =()=>{
    const idLength = 6;
    const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";
    let id = "";

    for (let i = 0; i<idLength; i++){
      const randomPosition = Math.floor(Math.random() * str.length);
      id += str[randomPosition];
    }
    return id;
  };
  return (
    
       <form onSubmit={handleOnSubmit} className="row g-2 mt-5 shadow-lg border p-5 rounded">
    <div className="col-md-6" >
    
    <input type="text" className="form-control" id="task" placeholder='Task' name='task' required
     onChange={handleOnChange} />
  </div>
  <div className="col-md-4">
    
    <input type="number" className="form-control" id="hr" placeholder='hours' name='hr'  onChange={handleOnChange}/>
  </div>
  <div className="col-md-2">
    
    <button className='btn btn-primary'>Add new task</button>
  </div>
    </form>
   
  )
}


