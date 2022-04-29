import React from 'react';
import './SearchInput.css';
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function SearchInput({ hideButtons = false}) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = React.useState("");
    const navigate = useNavigate();
    const Search = (event) => {
        event.preventDefault();
        navigate('/search')
        console.log('Your Search query for >>', input + ' has been displayed');
        dispatch({type: actionTypes.SET_SEARCH_TERM, term: input})
    }
    return (
        <form className="search">
            <div className="search__input">
            <svg xmlns="http://www.w3.org/2000/svg" className="search__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input value={input} onChange={event => setInput(event.target.value)}  type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" className="mic__icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>  
            </div>
            {!hideButtons ? (
            <center>
                <div className="button">
                    <button className="buttons__hidden" type="submit" onClick={Search}>Google Search</button>
                </div>
            </center>
            ): (
                <center>
                <div className="button">
                    <button className="buttons__hidden" type="submit" onClick={Search}>Google Search</button>
                </div>
            </center>
            )}
        </form>
    )
}

export default SearchInput;