import classes from "./List.module.css";
import Render from "./Render";
function List(props) {
  return (
    <ul className={classes.ul}>
      {props.meetups.filter((meetup) => meetup.CategoriesId === 1)
      .map((meetup) => (
        <Render
          key={meetup.Id}
          Id={meetup.Id}
          Title={meetup.Title}
          ImgUrl={meetup.ImgUrl}
          Description={meetup.Description}
          Price={meetup.Price}
          CategoriesId={meetup.CategoriesId}
        />
      ))}
    </ul>
  );
}
export default List;
