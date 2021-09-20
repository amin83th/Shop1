import Form from "../element/Form";
import {useHistory} from 'react-router-dom';
function Add() {
  const history =useHistory();
  function Added(meetupData) {
    fetch("https://shope1-38db.restdb.io/rest/products", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "x-apikey": "613afe7243cedb6d1f97ef3d",
        "cache-control": "no-cache",
        "content-type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((results) => {
        console.log(results);
      })
      .then(()=>{
        history.replace('/');
      })
      ;
  }
  return (
    <section>
      <Form onAddMeetup={Added} />
    </section>
  );
}
export default Add;
