import { useRef } from 'react';
import './InputForm.css'
const InputForm=(props)=>{
    
    const nameChangeRef=useRef();
    const ageChangeRef=useRef();
   const collegeChangeRef=useRef();
    function formSubmitHandler(e){
        e.preventDefault();
        const enteredage=ageChangeRef.current.value;
        const enteredname=nameChangeRef.current.value;
        const collegename=collegeChangeRef.current.value;
    const obj={
      name:enteredname,
      age:+enteredage,
      college:collegename
    }
    props.onSubmitForm(obj);
    ageChangeRef.current.value='';
    nameChangeRef.current.value='';
    collegeChangeRef.current.value='';
    
}
    return(
        <form className="form-control" onSubmit={formSubmitHandler}>
            <label>UserName:</label>
            <input type="text" ref={nameChangeRef}/>
            <label>College:</label>
            <input type="text" ref={collegeChangeRef}/>
            <label>Age:</label>
            <input type="number"  ref={ageChangeRef}/>
            <button className="button">Add User</button>
        </form>
    )
}
export default InputForm;