import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

//
import useFetch from './../hooks/use-fetch';
//

const NewTask = (props) => {

  const{isLoading,error,sendRequest}=useFetch({});

  const enterTaskHandler = async (taskText) => {
    console.log(taskText);
    sendRequest({
      url:'https://test-f870f-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskText),
    },props.onAddTask);

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
