import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  console.log(`🔑`);
  console.log(props.children.replaceAll('"',''));
  return <li className={classes.task}>{props.children.replaceAll('"','')}</li>
  // return <h1>heyyy</h1>
};

export default TaskItem;