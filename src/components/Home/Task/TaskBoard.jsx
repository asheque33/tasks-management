import { useState } from 'react';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TasksList from './TasksList';
import AddTaskModal from './AddTaskModal';

const priority = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
};
const defaultTask = {
  id: crypto.randomUUID(),
  title: 'Learn React Native',
  description:
    'I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.',
  tags: ['web', 'react', 'js'],
  priority: priority.high,
  isFavorite: true,
};
const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleAddEditTask = (newTask, isAdd) => {
    console.log('newTask clicked', newTask, isAdd);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (Object.is(task.id, newTask.id)) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowModal(false);
  };
  const handleEditTask = (existingTask) => {
    console.log('existing task=>editing', existingTask);
    setTaskToUpdate(existingTask);
    setShowModal(true);
  };
  const handleDeleteTask = (taskId) => {
    const tasksAfterFilter = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterFilter);
  };
  const handleFavorite = (taskId) => {
    //todo: large amount of elements(1000+) in the array
    const taskIndex = tasks.findIndex((task) => Object.is(task.id, taskId));
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
    //todo: small amount of elements(100-) in the array
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
    //   )
    // );
  };
  const handleDeleteAllTasks = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };
  const handleCloseClick = () => {
    setTaskToUpdate(null);
    setShowModal(false);
  };
  return (
    <section className='mb-20' id='tasks'>
      {showModal && (
        <AddTaskModal
          taskToUpdate={taskToUpdate}
          onSave={handleAddEditTask}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className='container'>
        <SearchTask />
        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <TaskActions
            onAddTask={() => setShowModal(true)}
            onDeleteAllClick={handleDeleteAllTasks}
          />
          <div className='overflow-auto'>
            <TasksList
              tasks={tasks}
              onFav={handleFavorite}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
