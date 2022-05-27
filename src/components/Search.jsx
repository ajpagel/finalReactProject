import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input);
  };

  //switch over to new page

  return (
    <form className='search-form' onSubmit={submitHandler}>
      <div className='search-div'>
        <input 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          className='search-input'
          value={input}/>
      </div>
    </form>
  )
};




export default Search;