import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    // console.log(`2`);
    taskList = (
      <ul>
        {props.items.map((task) => {
          console.log(`2`);
            console.log(task.text);
         return <TaskItem key={task.id}>{task.text}</TaskItem>
        }
        )}
      </ul>
      // {props.items.map((task) => {
       
      //     <TaskItem></TaskItem>
       
      // })}
    );
    console.log(taskList);
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = 'Loading tasks...';
  }

  return (
    <Section>
      {console.log(content)}
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
