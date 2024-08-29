import { useState, useEffect } from 'react';
import userToken from "../utils/userToken";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${userToken().token}`,
        }
      })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource, Make sure you have auhorised access');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
  }, [url])

  return { data, isPending, error };
}
 
export default useGet;
