import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

function Veggie() {
    const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    }, []); //only run as soon as component gets mounted and only run when it is mounted

    //async so we wait for data
    //add api key to end ?apiKey=${}... ${process.env.REACT_APP_API_KEY}... and if you want specific number &number=
    const getVeggie = async() => {

        const check = localStorage.getItem('veggie');
        //if item in local storage then get
        if(check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
    }
};

    return (
    <div >
            <Wrapper> 
                <h3>Veggie Recipes</h3>
                    <Splide 
                        options={{
                            perPage: 3,
                            arrows: false, // gets rid of arrows
                            pagination: false, //gets rid of dots below 
                            drag: 'free',
                            gap: '5rem',
                        }}
                    >
                        {veggie.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                    <Link to={'/recipe/'+recipe.id}>
                                        <Card>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient />
                                        </Card>
                                    </Link>
                                </SplideSlide>
                            );
                        })};
                        </Splide>
                    </Wrapper>
        </div>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    position: relative;


    img{
      border-radius: 2rem;
      position: relative;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
  }

  p{
      position: absolute;
      z-index: 10;
      bottom: 0%;
      transform: translate (-50%, 0%);
      color: white;
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggie;