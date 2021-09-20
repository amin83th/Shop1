import classes from "./Form.module.css";
import { useRef } from "react";
import { useState } from "react";
import SelectAll from "../data/SelectAll";
function Form(props) {
  const titleInputRef = useRef();
  const ImgUrlInputRef = useRef();
  const PriceInputRef = useRef();
  const DescriptionInputRef = useRef();
  const [name, setName] = useState("");
  console.log(name);
  function Get(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImgUrl = ImgUrlInputRef.current.value;
    const enteredPrice = PriceInputRef.current.value;
    const enteredDescription = DescriptionInputRef.current.value;
    const meetupData = {
      Title: enteredTitle,
      ImgUrl: enteredImgUrl,
      Price: enteredPrice,
      Description: enteredDescription,
      CategoriseId:name,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <section className={classes.section}>
      <h1>Add To Data</h1>
      <form className={classes.form} onSubmit={Get}>
        <div>
          <label htmlFor="Title">Title</label>
          <input required type="text" id="Title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="ImgUrl">ImgUrl</label>
          <input required type="url" id="ImgUrl" ref={ImgUrlInputRef} />
        </div>
        <div>
          <label htmlFor="Price">Price</label>
          <input required type="number" id="Price" ref={PriceInputRef} />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <textarea
            id="Description"
            required
            rows="6"
            ref={DescriptionInputRef}
          ></textarea>
        </div>
        <SelectAll value={name} onChange={(event) => setName(event.target.value)}/>

        <div className={classes.btn}>
          <button>Add</button>
        </div>
      </form>
    </section>
  );
}
export default Form;
