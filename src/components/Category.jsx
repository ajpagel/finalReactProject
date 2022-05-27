import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles} from 'react-icons/gi';
import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';



//NavNavLink to={'/cuisine/Italian'}

function Category() {
    return (
        <ul className='category-button'>
            <NavLink to={'/cuisine/Italian'} className="Slink">
                <FaPizzaSlice className='logo'/>
                <h4 className='circle-text'>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'} className="Slink">
                <FaHamburger className='logo'/>
                <h4 className='circle-text'>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'} className="Slink">
                <GiNoodles className='logo'/>
                <h4 className='circle-text'>Thai</h4>
            </NavLink>
        </ul> 
    );
}




export default Category;
