import { useState, useEffect } from "react";
import List from "../data/List";
function All() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://shope1-38db.restdb.io/rest/products", {
      headers: {
        "x-apikey": "613afe7243cedb6d1f97ef3d",
        "cache-control": "no-cache",
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  console.log(loadedMeetups);
  if (isLoading) {
    return <h1>LOADING ...</h1>;
  }

  return (
    <div>
      <List meetups={loadedMeetups}/>
    </div>
  );
}
export default All;
