import React, { useState } from 'react';
import "../style/toDoList.css";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Add from '@mui/icons-material/Add';
import { add } from "../actions/index";
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { orange } from '@mui/material/colors';
import Todo from './Todo';

const ToDoList = () => {

    const list = useSelector((state) => state.todoReducer.list)
    // console.log(list)

    const [input, setInput] = useState("")
    // const [todo,setToDo]=useState([])
    const dispatch = useDispatch()
    // const ariaLabel = { 'aria-label': 'description' };
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            <div className="container bg-dark w-100 mt-4 container1 py-3">
                {/* <input type="text" class/> */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <Input placeholder="To Do List" value={input} color="warning" sx={{ width: '100%', color: orange[500] }} onChange={handleInput} />
                    <IconButton className="addButton">
                    <Add sx={{ color: orange[500], fontSize: "30px" }} className="addIcon" type="button" onClick={(e) => {
                        if (input === "") {
                            alert("please enter something")
                        }
                        else {
                            dispatch(add(input));
                            // console.log(input)
                            setInput("")
                        }
                        }} />
                        </IconButton>

                </Box>
                {
                    list.map((todos, index) => {
                        return <ul key={index}>
                            <Todo data={todos}/>
                        </ul>
                    })
                }
            </div>
        </>
    )
}

export default ToDoList