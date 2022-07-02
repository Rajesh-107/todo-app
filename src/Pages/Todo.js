import { useEffect, useState } from 'react';
import todo from '../images/todo.png';
import Alltodo from './Alltodo';


const ToDo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`https://conservative-smarties-98453.herokuapp.com/addTask`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setTasks(data)
            })

    }, [tasks])

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const task = event.target.value;
            event.currentTarget.value = "";
            console.log(task);
            const addTask = { task }
            fetch(`https://conservative-smarties-98453.herokuapp.com/addTask`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addTask)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                })

        }
    }

    // const handleComplete =()=>{
    
    // }

    return (
        <div className='h-full'>
            <h2 className='text-4xl font-serif font-bold text-center p-10'>To Do List</h2>
            <div class="flex justify-center h-fit">
                <div class="flex flex-col md:h-fit md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class="w-full h-96 md:h-96 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg" src={todo} alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl  font-medium mb-2">My Daily Tasks</h5>
                        <div class="flex justify-center">
                            <div class="mb-3 xl:w-80">
                                <form onKeyPress={handleKeyPress}>
                                    <input
                                        type="text"
                                        name='addTask'
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleText0"
                                        placeholder='Add a task' />
                                </form>
                                <div>
                                    {
                                        tasks.map(alltask => <Alltodo alltask={alltask}></Alltodo>)

                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToDo;