import React from 'react';

const Alltodo = ({ alltask }) => {
    const { task, _id } = alltask;

    const handleComplete = (id, task) => {
        const alltask = {
            task: task,
            id: id
        }

        fetch(`https://conservative-smarties-98453.herokuapp.com/complete`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(alltask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        fetch(`https://conservative-smarties-98453.herokuapp.com/addTask/${id}`, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>

            <div class="form-check">
                <input onClick={() => handleComplete(_id, task)} class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            </div> <div className='flex flex-row justify-between'><p>{task}</p><span><button><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg></button></span></div>
        </div>
    );
};

export default Alltodo;