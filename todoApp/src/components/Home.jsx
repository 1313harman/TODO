import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { MdOutlineTimer } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { TodoForm, TodoItem, Todoprovider } from '../context2';

function Home() {
  const [wish, setWish] = useState('');
  const [showDate, setShowDate] = useState('');
  const { user } = useContext(AuthContext);
  const [activeButton, setActiveButton] = useState(''); // Track the active button
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#1A1A1A");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    setCount(todos.filter(todo => todo.completed).length); // Update count when todos change
  }, [todos]);


  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  useEffect(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    const dayOfWeekText = daysOfWeek[date.getDay()];
    const monthText = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const currentHour = date.getHours();
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    setWish(greeting);
    setShowDate(`${dayOfWeekText}, ${monthText} ${dayOfMonth}`);
  }, []);

  return (
    <div className="flex h-screen" style={{ backgroundColor: color }}>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-700 text-gray-200 p-4 flex justify-center items-center flex-col font-inter">
          <div className="text-center">
            <center><MdOutlineTimer className="text-5xl" /></center> {/* Increased size */}
            <p className="text-xl mt-2">{showDate}</p>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl">{wish}, {user?.fullname}</h1>
          </div>
          <br />
          <div className="flex flex-row align-middle justify-center mb-4">
            <IoMdCheckmark className="text-xl" />
            <span className="ml-2">{count} Work Completed</span>
          </div>
        </div>

        {/* Task Section */}
        <div className="flex-grow p-6 bg-gray-800 text-gray-200 font-inter">
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 mb-6">
            <h2 className="text-2xl font-bold mb-4">My tasks</h2>
            <div className="flex justify-between mb-4">
              <div>
                <button
                  className={`text-white py-2 px-4 rounded hover:bg-green-400 hover:text-black hover:font-semibold ${activeButton === 'upcoming' ? 'bg-blue-600 text-black font-semibold' : ''}`}
                  onClick={() => handleButtonClick('upcoming')}
                >
                  Upcoming
                </button>
                <button
                  className={`text-white py-2 px-4 rounded hover:bg-green-400 hover:text-black hover:font-semibold ${activeButton === 'overdue' ? 'bg-blue-600 text-black font-semibold' : ''}`}
                  onClick={() => handleButtonClick('overdue')}
                >
                  Overdue
                </button>
                <button
                  className={`text-white py-2 px-4 rounded hover:bg-green-400 hover:text-black hover:font-semibold ${activeButton === 'completed' ? 'bg-blue-600 text-black font-semibold' : ''}`}
                  onClick={() => handleButtonClick('completed')}
                >
                  Completed <span className="ml-2 bg-red-600 font-semibold rounded-full px-1 py-0.5">{count}</span>
                </button>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">Create task</button>
            </div>
            {activeButton === 'upcoming' && (
              <div className="">
                <ul className="bg-gray-800 rounded p-2 mb-2">
                  {todos.map((todo) => (
                    <div key={todo.id} className="w-full">
                      <TodoItem todo={todo} />
                    </div>
                  ))}
                </ul>
              </div>
            )}
            {activeButton === 'overdue' && (
              <div className="bg-gray-800 rounded p-2 mb-2"> 

              </div>
            )}
            {/* activeButton === 'completed' && (
              <div>
                <div className="bg-gray-800 rounded p-2 mb-2">
                  {(() => {
                    const completedTodos = [];
                    let i = 0;
                    while (i < todos.length) {
                      if (todos[i].completed) {
                        completedTodos.push(todos[i]);
                      }
                      i++;
                    }
                    return completedTodos.map((todo) => (
                      <div key={todo.id} className="w-full">
                        <TodoItem todo={todo} />
                      </div> 
                    )
                  )}
                  <div/>
                <div/>
              <div/>  ****Unoptimize approach for complete section */}
            {activeButton === 'completed' && (
              <div>
                <div className="bg-gray-800 rounded p-2 mb-2">
                  {todos.filter(todo=>todo.completed).map((todo)=>
                    <div key={todo.id} className="w-full">
                      <TodoItem todo={todo}/>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* Additional Content/Tasks can be added here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
