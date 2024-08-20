
// import './App.css';
// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
// import { useState } from 'react';


// function App() {

// let [todoList,setTodoList]=useState([]);

//   let saveToDoList=(event)=>{
//  let toname= event.target.toname.value;
//  if(!todoList.includes(toname)){
//   let finalList=[...todoList,toname]
//   setTodoList(finalList)
//  }
//  else{
//   NotificationManager.warning("To do name already exists")
//  }

//     event.preventDefault();

//   }

//   let list = todoList.map((value,index)=>{
//     return(
//       <ToDoListItems value={value} key={index} indexNumber={index} todoList={todoList} setTodoList={setTodoList}
      
//       />
//     )
//   })
//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       <form onSubmit={saveToDoList}>
//         <input type="text" name="toname" /> <button>Save</button>

//       </form>
//       <div className='outerDiv'>
//         <ul>
//          {list}
//         </ul>

//       </div>
//       <NotificationContainer />
//     </div>
//   );
// }

// export default App;


// function ToDoListItems({value,indexNumber,todoList,setTodoList}){

// let[status,setStatus]=useState(false)
// let deleteRow=()=>{
//   let finalData= todoList.filter((v,i)=>i!=indexNumber)
//   setTodoList(finalData)

// }

// let checkStatus=()=>{
// setStatus(!status)
// }
//   return(
//     <><li className={(status)?'completetodo':''} onClick={checkStatus}>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li></>
//   )
// }

import './App.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useState } from 'react';

function App() {
  // Initialize with dummy data
  const [todoList, setTodoList] = useState([
    "Buy groceries",
    "Complete React project",
    "Call the bank",
    "Schedule a meeting",
    "Read a book"
  ]);

  const saveToDoList = (event) => {
    event.preventDefault();

    let toname = event.target.toname.value.trim();
    if (toname && !todoList.includes(toname)) {
      setTodoList([...todoList, toname]);
    } else if (todoList.includes(toname)) {
      NotificationManager.warning("To-do name already exists");
    } else {
      NotificationManager.warning("To-do name cannot be empty");
    }

    event.target.toname.value = ''; // Clear the input after submission
  };

  const list = todoList.map((value, index) => (
    <ToDoListItems 
      value={value} 
      key={index} 
      indexNumber={index} 
      todoList={todoList} 
      setTodoList={setTodoList} 
    />
  ));

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" /> <button type="submit">Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todoList, setTodoList }) {
  const [status, setStatus] = useState(false);

  const deleteRow = () => {
    const finalData = todoList.filter((_, i) => i !== indexNumber);
    setTodoList(finalData);
  };

  const checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
      {indexNumber + 1}. {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
