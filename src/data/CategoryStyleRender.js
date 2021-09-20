function CategoryStyleRender(props) {
  return (
    <div>
      <label htmlFor={props.Id}>{props.Title}</label>
      <input type="checkbox" id={props.Id} required/>
    </div>
  );
}

export default CategoryStyleRender;
