import React from 'react'
import { Link } from 'react-router-dom'
import { CgPokemon } from "react-icons/cg";
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
          <div className='links'>
        </div>    
      </nav>
    </StyledNav>
    </>
  )
}


