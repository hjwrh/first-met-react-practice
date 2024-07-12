import { useEffect, useState } from "react";

export function useFetch(baseUrl, initialType) {
 
    const [data, setData] = useState();

    const fetchUrl = (type) => {
      fetch(baseUrl +'/' + type )
      .then((res) => res.json())        //이렇게 써야 한다. 
      .then((res) => setData(res));
    };
  
    useEffect(() => {
      fetchUrl(initialType);
    }, []);

    return {
        data,
        fetchUrl,
    };
}