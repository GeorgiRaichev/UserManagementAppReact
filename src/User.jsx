export default function User({ data: { name, username, email } }) {
    return (
        <li>{name} ({username}) - {email}</li>
    );

}