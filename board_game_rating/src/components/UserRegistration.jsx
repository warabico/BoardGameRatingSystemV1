import { nanoid } from "nanoid";
import { useState } from "react";

const UserRegistration = ({ register }) => {
    const [username, setUsername] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (username !== "") {
            register({
                id: nanoid(),
                username: username,
                rating: 1000,
            });
            setUsername("");
        }
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={updateUsername}
                ></input>
            </form>
        </>
    );
};

export default UserRegistration;
