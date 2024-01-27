
import './Dialougebox.css'

const Dialouge=(props)=>{
    function closeHandler(){
        props.close();
    }
    
    return(
    <div  className='modal'>

  <div className="modal-content">
    <button className="close"  onClick={closeHandler}>&times;</button>
    <p>{props.value}</p>
  </div>
</div>
    )
}
export default Dialouge;