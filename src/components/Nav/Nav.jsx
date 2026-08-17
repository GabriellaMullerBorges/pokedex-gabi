import React from 'react'
import { Link } from 'react-router-dom'
import { CgPokemon } from "react-icons/cg";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { StyledNav } from './navStyle'

export function Nav({ setMenuIsVisible }) {

  return (
    <> 
    <StyledNav>
      <nav id='navbar'>
              <Link to='/'>
                  <CgPokemon />
                  Home
              </Link>  
              <Link to='/elements'>
                  <MdOutlineLocalFireDepartment />
                  Elementos
              </Link>  
          <div className='links'>
        </div>    
      </nav>
    </StyledNav>
    </>
  )
}


