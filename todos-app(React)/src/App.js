import './App.css';
import React, { useState } from 'react';
import Banner from './MyComponents/Banner';
import Footer from './MyComponents/Footer';
import TaskItems from './MyComponents/TaskItems';


function App() {

  const [taskList, setTaskList] = useState([]);

  const getTitle = (data) => {
    setTaskList(taskList.concat(data));
  }

  const delTask = (data) => {
    setTaskList(
      taskList.filter(
        (e)=>{
          return e !== taskList[data];
        }
      )
    )
  }
  
  return (
    <div className="App">
      <Banner onClick={getTitle}></Banner>
      
      <TaskItems taskList={taskList} onClick={delTask}></TaskItems>

      <Footer 
      text={<>© <a href='https://www.linkedin.com/in/vivek-raj-gupta-coder/'>Vivek Raj Gupta</a></>}>
      </Footer>
      
    </div>
  );
}

export default App;
