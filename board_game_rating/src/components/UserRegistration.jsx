import { nanoid } from "nanoid";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const UserRegistration = ({ register }) => {
    const [username, setUsername] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (username !== "") {
            register({
                id: nanoid(),
                username: username,
                rating: 900 + Math.floor(Math.random() * 2e2),
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
                <Stack spacing={2} direction="row">
                    <TextField
                        id="username"
                        label="username"
                        variant="standard"
                        value={username}
                        onChange={updateUsername}
                    />
                    <Button variant="outlined" onClick={submit}>
                        Register
                    </Button>
                </Stack>
            </form>
        </>
    );
};

export default UserRegistration;
