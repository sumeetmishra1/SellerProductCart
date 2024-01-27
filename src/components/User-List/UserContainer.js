
import NewUser from './NewUser';

const UserContainer=(props)=>{
    return(
        props.users.map((user)=>{
            return <NewUser key={Math.random()} data={user}/>
        })
    )
}
export default UserContainer;