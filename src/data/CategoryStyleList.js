import classes from "./CategoryStyleList.module.css";
import CategoryStyleRender from "./CategoryStyleRender";
function CategoryStyleList(props) {

  return (
    <div className={classes.div}>
      <form onChange={props.onChange}>
        {props.meetups.map((meetup) => (
          <CategoryStyleRender
            key={meetup.Id}
            Id={meetup.Id}
            Title={meetup.Title}
            ImgUrl={meetup.ImgUrl}
            Description={meetup.Description}
          />
        ))}
        <div>
          <button>Filter</button>
        </div>
      </form>
    </div>
  );
}
export default CategoryStyleList;
