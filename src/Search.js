import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import response from "./response"
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Search() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  const { data } = useGoogleSearch(term);

  //const data = response;

  console.log(data);
  return (
    <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
          </Link>
          <div class="searchPage__headerBody">
            <SearchInput hideButtons/>
            <div class="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <Link to="/">All</Link>
                </div>
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
                <Link to="/">Images</Link>
                </div>
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <Link to="/">News</Link>
                </div>
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <Link to="/">Shopping</Link>
                </div>
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
                <Link to="/">Maps</Link>
                </div>
                <div className="searchPage__option">
                <svg xmlns="http://www.w3.org/2000/svg" className="search___icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
                <Link to="/">More</Link>
                </div>
              </div>
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to="/">Settings</Link>
                </div>
              </div>
              <div className="searchPage__option">
                  <Link to="/">Tools</Link>
                </div>
            </div>
          </div>
        </div>

        {term && (
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term.toUpperCase()}
            </p>
            {data?.items.map(item => (
              <div className="searchPage__result">
                <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src}
                  />
                )}
                {item.displayLink}</a>
                <a className="searchPage__resultTitle" href="{item.link}">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default Search;