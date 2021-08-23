import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useFetch from './../src/components/hooks/use-fetch';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const{isLoading,error,sendRequest}=useFetch({});
  const [tasks, setTasks] = useState([]);
  // useFetch();

  const taskAddHandler = async (task) => {
    console.log(task);
   const data=await task;
    console.log(data);
    //  -->
    const loadedTasks = [];

      for (const taskKey in data) {
        console.log(data.name); // -Mhm1auCKxUqhWj9knUy
        console.log(data); //{}
        // loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // loadedTasks.push({ id: taskKey, text:data[taskKey] });
        loadedTasks.push({ id: taskKey, text:data[taskKey] });
      }
      console.log(loadedTasks);
    //  await setTasks(loadedTasks);


    //-->
   await setTasks((prevTasks) => {
      console.log(prevTasks);
      return prevTasks.concat(loadedTasks);
    });
   await console.log(tasks);
  };
  const fetchTasks = async (taskText) => {
    
   await sendRequest({
      url:'https://test-f870f-default-rtdb.firebaseio.com/tasks.json',
    },taskAddHandler);
    // sendRequest();
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://test-f870f-default-rtdb.firebaseio.com/tasks.json'
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    //   const loadedTasks = [];

    //   for (const taskKey in data) {
    //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    //   }

    //   setTasks(loadedTasks);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
   

  }, []);


  return (
    <React.Fragment>
      {console.log(`0 rendering..`)}
      {/* {console.log(Object.entries(tasks[0]))} */}
      {console.log(tasks)}
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
