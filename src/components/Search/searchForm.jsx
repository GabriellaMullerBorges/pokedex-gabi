import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { StyledForm } from './FormStyle'

export function Searchform() {

  const [ search, setSearch] = useState("");
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(search);

  if(!search) return ;
  navigate(`/search?query=${search}`);
  setSearch("")
}

  return (
    <StyledForm>
      <form on onSubmit={handleSubmit}>
          <input type='text' placeholder='Buscar...' onChange={(e) => setSearch (e.target.value)} 
          value={search}
          />
          <button type='submit'>
              <IoSearch/>
          </button>
      </form>
    </StyledForm>
  )
}
