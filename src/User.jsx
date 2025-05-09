export default function User(props){
    return(
        <li>{props.data.name} ({props.data.username}) - {props.data.email}</li>
    );

}