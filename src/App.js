import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';
import InputForm from './components/Input-form/InputForm'
import UserContainer from './components/User-List/UserContainer';
import Dialougebox from './components/Warning-dialouge/Dialougebox';
function App() {
  let dialougemodel='';
  const[newUser,gotuser]=useState([]);
  const[dialougebox,showBox]=useState(dialougemodel)
  function closeDialogBox(){
    dialougemodel='';
    showBox(dialougemodel)
  }
  function formsubmit(obj){
    if(obj.name.trim().length<1){
      dialougemodel=<Dialougebox state={dialougebox} value={'Enter Valid Name'} close={closeDialogBox}/>
      return showBox(dialougemodel)
    }
    else if(obj.age<1){
      dialougemodel=<Dialougebox state={dialougebox} value={'Age Should Be more than 1'} close={closeDialogBox}/>
      return showBox(dialougemodel)
    }
    console.log(obj)
    
    gotuser((olduser)=>{
      return[obj,...olduser];
    })
  }
  return (
    <div className='body' >
     <InputForm onSubmitForm={formsubmit}/>
    {ReactDOM.createPortal(dialougebox,document.getElementById('modal-root'))}
    
     <UserContainer users={newUser}/>
    </div>
  );
}

export default App;
