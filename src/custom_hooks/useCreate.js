import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function useCreate(url, data) {
    const history = useHistory();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(() => {
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setData(data);
      setError(null);
    }
    )
    .catch(err => {
      // auto catches network / connection error
      setIsPending(false);
      setError(err.message);
    })
    return {isPending, data, error}
}
