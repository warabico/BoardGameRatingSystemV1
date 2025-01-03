import { nanoid } from "nanoid";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const UserRegistration = ({ register, reset }) => {
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
            <h2>Registration</h2>
            <Stack spacing={2} direction="row">
                <form onSubmit={submit}>
                    <Stack spacing={2} direction="row">
                        <TextField
                            id="username"
                            label="username"
                            variant="standard"
                            value={username}
                            onChange={updateUsername}
                        />
                        <Button
                            variant="contained"
                            onClick={submit}
                            disabled={username === ""}
                        >
                            Register
                        </Button>
                    </Stack>
                </form>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={reset}
                    startIcon={<DeleteIcon />}
                >
                    RESET
                </Button>
            </Stack>
        </>
    );
};

export default UserRegistration;
