import { useState } from 'react';

const AddTaskModal = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
      isFavorite: false,
    }
  );
  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));
  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'tags') {
      value = value.split(',');
    }
    setTask({
      ...task,
      [name]: value,
    });
  };
  return (
    <>
      <div className='bg-black/70 absolute top-0 left-0 z-10 h-full w-full'></div>
      <form className='absolute top-1/4 left-1/3 z-20 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11'>
        <h2 className='mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]'>
          {isAdd ? 'Add New Task' : 'Edit Task'}
        </h2>

        <div className='space-y-9 text-white lg:space-y-10'>
          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='title'>Title</label>
            <input
              className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
              type='text'
              name='title'
              id='title'
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className='space-y-2 lg:space-y-3'>
            <label htmlFor='description'>Description</label>
            <textarea
              className='block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]'
              type='text'
              name='description'
              id='description'
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className='grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20'>
            <div className='space-y-2 lg:space-y-3'>
              <label htmlFor='tags'>Tags</label>
              <input
                className='block w-full rounded-md bg-[#2D323F] px-3 py-2.5'
                type='text'
                name='tags'
                id='tags'
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            <div className='space-y-2 lg:space-y-3'>
              <label htmlFor='priority'>Priority</label>
              <select
                className='block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5'
                name='priority'
                id='priority'
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value=''>Select Priority</option>
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-16 flex justify-between lg:mt-20'>
          <button
            type='submit'
            onClick={onCloseClick}
            className='rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80'
          >
            Close
          </button>
          <button
            type='submit'
            onClick={() => onSave(task, isAdd)}
            className='rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80'
          >
            {isAdd ? 'Save' : 'Update'}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
