import { useState } from "react";

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted.");
    }

    const handleChange = (e) => {
        const newUsername = e.currentTarget.value;
        setUsername(newUsername);
        // console.log(e.currentTarget.value);
    }

    
    const handleChange2 = (e) => {
        const newPassword = e.currentTarget.value;
        setPassword(newPassword);
        // console.log(e.currentTarget.value);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                Username : <input type="text" value={username} onChange={handleChange} />
                Password : <input type="text" value={password} onChange={handleChange2} />
                <button>LogIn</button>
            </form>

            {username}
            {password}
        </div>
     );
}
export default LoginForm;