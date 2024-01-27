import './NewUser.css'
const User=(props)=>{
    const Name=props.data.name;
    const Age=props.data.age;
    const College=props.data.college;
    return(
        <div className="list-item">
            <li>{Name} ({Age}) {College}</li>
        </div>
    )
}
export default User;