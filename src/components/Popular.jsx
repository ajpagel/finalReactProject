//carousel = Splide
//splideslide is each individual component
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';



function Popular() {

    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    }, []); //only run when component gets mounted 

    //async so we wait for data
    //add api key to end ?apiKey=${}... ${process.env.REACT_APP_API_KEY}... and if you want specific number &number=
    const getPopular = async() => {

        const check = localStorage.getItem('popular');
        //if item in local storage then get
        if(check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
    }
};


    //map through the popular array grab a recipe and output the recipe title
    //need key prop when mapping
    return (
        <div >
            <Wrapper> 
                <h3>Popular Recipes</h3>
                    <Splide 
                        options={{
                            perPage: 4,
                            arrows: false, // gets rid of arrows
                            pagination: false, //gets rid of dots below 
                            drag: 'free',
                            gap: '5rem',
                        }}
                    >
                        {popular.map((recipe) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Card>
                                        <Link to={'/recipe/'+recipe.id}>
                                            <p>{recipe.title}</p>
                                            <img src={recipe.image} alt={recipe.title} />
                                            <Gradient />
                                        </Link>
                                    </Card>
                                </SplideSlide>
                            );
                        })};
                    </Splide>
            </Wrapper>
        </div>
    );
}


//styled components
    //replace the div with the wrapper

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

export default Popular;