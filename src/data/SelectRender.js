function SelectRender(props){    
    return(
        <option value={props.Id}>{props.Title}</option>
    );
}   

export default SelectRender;