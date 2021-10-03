import classes from "./CategoryStyleList.module.css";
// import { useRef } from "react";
import {useState} from "react";
function CategoryStyleList(props) {
  // const one = useRef();

  const [before,setBefore] = useState("");
  function box(event){
    event.preventDefault();
    // const enteredOne = one.current.value;
    const meetupData = {
      salam:before,
    };
    // props.onAddMeetup(meetupData);
    console.log(meetupData);
  }
  return (
    <div className={classes.div}>
      <form onSubmit={box}>
  ‍‍‍     {props.meetups.map(meetup => (
          <div key={meetup.Id}>
            <button value={meetup.Title}>{meetup.Title}</button>
          </div>
        ))}
      </form>
    </div>
  );
}
export default CategoryStyleList;
