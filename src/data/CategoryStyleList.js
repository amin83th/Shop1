import classes from "./CategoryStyleList.module.css";
// import { useRef } from "react";
import {useState} from "react";
function CategoryStyleList(props) {
  // const one = useRef();

  const [selectedMeetups,setSelectedMeetups] = useState([]); // const {selectedMeetups,setSelectedMeetups} = useContext(MainContext);
  
  const handleAddMeetup = (meetupId,checked)=>{
    const isInSelecteds = selectedMeetups.includes(meetupId);
    if(isInSelecteds && !checked){
      let newSelectedMeetups = [...selectedMeetups];
      const index = selectedMeetups.findIndex(m => m.Id === meetupId);
      newSelectedMeetups.splice(index,1);
      setSelectedMeetups(newSelectedMeetups);
    }else if (!isInSelecteds && checked){
      setSelectedMeetups(p => [...p,meetupId]);
    }
  }
  
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
            <label>{meetup.Title}</label>
            <input type="checkbox" onChange={(e)=> handleAddMeetup(meetup.Id,e.target.checked)} />
          </div>
        ))}
      </form>
    </div>
  );
}
export default CategoryStyleList;
