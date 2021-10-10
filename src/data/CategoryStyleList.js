import classes from "./CategoryStyleList.module.css";

// import {useState} from "react";
function CategoryStyleList(props) {
  function filter(event){
    console.log(event.target.checked , event.target.value)
  }
  return (
    <div className={classes.div}>
      <form >
  ‍‍‍     {props.meetups.map(meetup => (
          <div>
            <label>{meetup.Title}</label>
             <input type="checkbox" value={meetup.CategoriesId} onChange = {(e)=>{filter(e,meetup.categoryId)}}/>
          </div>
        ))}
      </form>
    </div>
  );
}
export default CategoryStyleList;
