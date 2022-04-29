import { useState, useEffect } from 'react'
import API_KEY from "./Keys";

const CONTEXT_KEY = "acbf9ed6aa6b53403"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            );
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, [term]);
    return { data };
}

export default useGoogleSearch;