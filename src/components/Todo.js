import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { orange } from '@mui/material/colors';
import { deleteTodo } from "../actions/index";
import { useDispatch } from 'react-redux';
// import StarIcon from '@mui/icons-material/Star';

const Todo = ({ data }) => {
    const dispatch = useDispatch();
    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: orange[500], marginTop: "5px" }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={data.data} />
                        <IconButton className="">
                            <Delete sx={{ borderRadius: "50%", fontSize: "35px", color:"#212529" }} className="p-1" onClick={() => {
                                dispatch(deleteTodo(data.id))
                            }} />
                        </IconButton>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}

export default Todo