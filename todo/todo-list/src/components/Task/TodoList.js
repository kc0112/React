import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";
import axios from "axios"

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    console.log("task",taskList);
    useEffect(async() => {
        // let arr = localStorage.getItem("taskList");
        let resp = await axios.get('https://todo-list-46.herokuapp.com/api/');
        let obj = (resp.data);
        setTaskList(obj);
        
    }, []);

    const deleteTask = async (index) => {
        // local storage
        // let tempList = taskList;
        // tempList.splice(index, 1);
        // console.log("index", index);
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // window.location.reload();

        // axios
        let tempList = taskList;
        tempList.splice(index, 1);
        await axios.delete(`https://todo-list-46.herokuapp.com/api/${index + 1}`);
        setTaskList(tempList);
        window.location.reload();
    };

    const updateListArray = async(obj, index) => {
        // let tempList = taskList;
        // tempList[index] = obj;
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // window.location.reload();

        let tempList = taskList;
        tempList[index] = obj;
        await axios.put(`https://todo-list-46.herokuapp.com/api/${index + 1}`, obj)
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = async (taskObj) => {

        // local storage
        // let tempList = taskList;
        // console.log("DATA: ", tempList);
        // tempList.push(taskObj);
        // localStorage.setItem("taskList", JSON.stringify(tempList));
        // setTaskList(tempList);
        // setModal(false);

        //axios
        let tempList = taskList;
        tempList.push(taskObj);
        await (await axios.post("https://todo-list-46.herokuapp.com/api/", taskObj))
        setTaskList(tempList);
        setModal(false);
    };

    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
                    Create Task
                </button>
            </div>

            <div className="task-container">
                {taskList && taskList.map((obj, index) => (
                    <Card
                    taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray}
                    />
                ))}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default TodoList;
