import React from 'react'
import todoImage from "../images/todolist2.png"
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';

const Home = () => {
  return (
    <>
      <div className="container mt-2 bg-dark">
        <div className="row">
          <div className="col-md-6">
            <img src={todoImage} className="w-100" alt="" />
          </div>
          <div className="col-md-6 bg-dark text-white p-4">
            <h2 className="my-5 px-5">To Do List app</h2>
            <p className="text-justify px-5" style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non porro velit numquam id natus nisi fugiat cum corrupti deleniti repellat aspernatur quo quas ut, error esse consequuntur ad dolorem eaque hic optio dignissimos! Corporis amet, perspiciatis ipsa quaerat quis, explicabo rerum quisquam cupiditate natus, at asperiores porro tempora. Explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis officiis iusto exercitationem eaque optio illo et. Maiores, placeat. Qui et repellat eos aut delectus inventore quaerat reprehenderit laudantium mollitia.</p>
            
            <NavLink to="/todolist" className="text-decoration-none"><Button variant="outlined" sx={{color:orange[500] , border:"1px solid"}}>
        to do list
      </Button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home