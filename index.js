import React,{useState} from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

const AddTask= ({addTask})=>{
  const[value,updateValue]=useState('');

const handleSubmit =e =>{
  e.preventDefault();
  if (value !==""){
    addTask(value);
    updateValue('');
  }
};

return(
  <form onSubmit={handleSubmit}>
   <input type="text" 
   value={value} 
   placeholder="enter your task" 
   onChange={e=>updateValue(e.target.value)}/>
   <button type="submit"><sapn class="material-icons"> add</sapn></button>
  </form>
);
}

const TodoList = ()=>{
  
 const addTask=text=>updateTask([...tasks,{text}]);

     const[tasks,updateTask]=useState([
       {
         text:"wakeUp",
         isCompleted:false
       },
       {
        text:"freshUp",
        isCompleted:false
      },
      {
        text:"BoostUp",
        isCompleted:false
      },
      {
        text:"Reading Books",
        isCompleted:false
      }
    
    
     ]);
    
     const togglTask=index=>{
       const newTask=[...tasks];
      if (newTask[index].isCompleted){
        newTask[index].isCompleted=false;
      }
      else{
        newTask[index].isCompleted=true;
      }
       updateTask(newTask);
     }
     const removeTask=index=>{
      const newTask=[...tasks];
      newTask.splice(index,1);
         updateTask(newTask); 
     
    }
    
return(
  <div className="to-do-app">
     
    <h1>React Todo List App</h1>
    <div className="list-of-task">
    {tasks.map((task,index)=>(
    <div className="task-status">
    <span onClick={()=>togglTask(index)}  className={task.isCompleted? "task-name completed-task": "task-name "}>
      
      {task.text}
      </span>  
      <button onClick={()=>removeTask(index)}><span class="material-icons">delete</span></button>
      </div>
  ))}
   <AddTask addTask={addTask}/>
  </div>
  </div> 
 
)
    }
    
ReactDOM.render(<TodoList/>,document.getElementById("root"));