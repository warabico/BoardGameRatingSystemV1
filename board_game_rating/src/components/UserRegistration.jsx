import { nanoid } from "nanoid";
import { useState } from "react";
import TextField from "@mui/material/TextField";

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
                <TextField
                    id="username"
                    label="username"
                    variant="standard"
                    value={username}
                    onChange={updateUsername}
                />
            </form>
        </>
    );
};

export default UserRegistration;
