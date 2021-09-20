import classes from "./SelectList.module.css";
import SelectRender from "./SelectRender";
function SelectList(props) {
  return (
    <div className={classes.div}>
      <label htmlFor="Categories">Categories</label>
      <select id="Categories" className={classes.select} onChange={props.onChange}>
        {props.meetups.map((meetup) => (
          <SelectRender
            key={meetup.Id}
            Id={meetup.Id}
            Title={meetup.Title}
            ImgUrl={meetup.ImgUrl}
            Description={meetup.Description}
          />
        ))}
      </select>
    </div>
  );
}
export default SelectList;
