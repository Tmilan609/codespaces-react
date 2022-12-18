import { useEffect, useState } from 'react'

const useGoogle = term => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&CX=${process.env.REACT_APP_CONTECT_KEY}&q=${term}`)
        .then((respone) => respone.json()).then((result) => {
            setData(result);
        }) 
        
        }, [term])


    return{ data };
}

export default useGoogle;