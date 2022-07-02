import React, { useEffect, useState } from 'react';


const MyAlltodo = () => {
    const [allCompletedTasks, setAllCompletedTask] = useState([])
    useEffect(() => {
        fetch('https://conservative-smarties-98453.herokuapp.com/completedTask')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCompletedTask(data)
            })
    }, []);
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center p-2 m-2 text-purple-600 font-serif'>All Of My Completed Tasks</h2>
            <div className='flex justify-center'>
                <div class="flex w-52 lg:w-fit flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full">
                                    <thead class="border-b">
                                        <tr>
                                            <th scope="col" class="lg:text-xl font-serif text-gray-900 px-6 py-4 text-left">
                                                SL.
                                            </th>
                                            <th scope="col" class="lg:text-xl font-serif text-gray-900 px-6 py-4 text-left">
                                                Book Name
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            allCompletedTasks.map((allCompletedTask, index) => <tr class="border-b">
                                                <td class="px-6 py-4 whitespace-nowrap lg:text-xl font-medium text-gray-900">{index + 1}</td>
                                                <td class="lg:text-xl text-gray-900 px-6 py-4 whitespace-nowrap">
                                                    {allCompletedTask.task}
                                                </td>

                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAlltodo;