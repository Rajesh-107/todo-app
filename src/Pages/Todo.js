import { useEffect, useState } from 'react';
import todo from '../images/todo.png';


const ToDo = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/addTask`, {
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
            fetch(`http://localhost:5000/addTask`, {
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
                                        tasks.map(task => <>

                                            <div class="form-check">
                                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            </div> <div className='flex flex-row justify-between'><p>{task.task}</p><span><button><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></button></span></div></>)


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