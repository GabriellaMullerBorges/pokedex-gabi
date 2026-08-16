import styled from 'styled-components';

export const StyledNav = styled.nav`

#navbar{
position:sticky;
display:flex;
justify-content:space-between;
align-items:center;
padding: 1rem 2rem;
background-color:black;

 h1 a {
    display:flex;
    align-items:center;
    gap: 0.5rem;
    }

    a {
        font-size: 20px;
        position: relative;
        color: white;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: white;
          transition: .3s;
        }
      }
    }


.links {
    display: flex;
    width:70%;
    align-items:center;
    justify-content:space-evenly
}


  
  @media(max-width: 700px) {

      #navbar{
        display: none;
      }
   
    padding: 14.5px 16px;


`
