import {useState,useEffect} from 'react';
import CategoryStyleList from './CategoryStyleList';
function CategoryStyleAll(props){
    const [isLoading,setIsLoading]=useState(true);
  const [loadedMeetups,setLoadedMeetups]=useState([]);
    useEffect(()=>{
        setIsLoading(true);
        fetch("https://shope1-38db.restdb.io/rest/categories",{
          headers: {
            "x-apikey": "613afe7243cedb6d1f97ef3d",
            "cache-control": "no-cache",
            "content-type": "application/json",
          },
        })
        .then((response) =>{
          return response.json();
        }) 
        .then((data) => {
          const meetups=[];
          for(const key in data){
            const meetup={
              id:key,
              ...data[key]
            };
            meetups.push(meetup)
          };
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
      },[]);
      console.log(loadedMeetups);
      if(isLoading){
        return(
          <h1>LOADING ...</h1>
        )
      }
    return(
        <div>
            <CategoryStyleList meetups={loadedMeetups} onChange={props.onChange}/>
        </div>
    );
}
export default CategoryStyleAll;