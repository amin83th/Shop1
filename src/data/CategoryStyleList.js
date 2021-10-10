import classes from "./CategoryStyleList.module.css";

<<<<<<< HEAD
// import {useState} from "react";
function CategoryStyleList(props) {
  function filter(event){
    console.log(event.target.checked , event.target.value)
=======
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
>>>>>>> 4d1c7171771f7e0f06779c65c01ed7c745220cfb
  }
  return (
    <div className={classes.div}>
      <form >
  ‍‍‍     {props.meetups.map(meetup => (
<<<<<<< HEAD
          <div>
            <label>{meetup.Title}</label>
             <input type="checkbox" value={meetup.CategoriesId} onChange = {(e)=>{filter(e,meetup.categoryId)}}/>
=======
          <div key={meetup.Id}>
            <label>{meetup.Title}</label>
            <input type="checkbox" onChange={(e)=> handleAddMeetup(meetup.Id,e.target.checked)} />
>>>>>>> 4d1c7171771f7e0f06779c65c01ed7c745220cfb
          </div>
        ))}
      </form>
    </div>
  );
}
export default CategoryStyleList;
