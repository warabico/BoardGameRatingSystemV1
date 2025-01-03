import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import UserRegistration from "./components/UserRegistration";

const STORAGE_KEY_USERS = "local-storage-users";
const STORAGE_KEY_HISTORIES = "local-storage-histories";

const getLocalData = (key) => JSON.parse(localStorage.getItem(key));
const saveLocalData = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

const theme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    let restoredUsers = getLocalData(STORAGE_KEY_USERS) ?? [];
    let restoredHistories = getLocalData(STORAGE_KEY_HISTORIES) ?? [];

    const [users, setUsers] = useState(restoredUsers);
    const [histories, setHistories] = useState(restoredHistories);

    useEffect(() => {
        saveLocalData(STORAGE_KEY_USERS, users);
        saveLocalData(STORAGE_KEY_HISTORIES, histories);
    });

    const addUser = (user) => {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
    };

    const resetData = () => {
        setUsers([]);
        setHistories([]);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ paddingTop: 2, paddingBottom: 2 }}>
                <UserRegistration register={addUser} />
                {users.map((user, idx) => {
                    return (
                        <p>
                            {idx} : {user.username} RATING = {user.rating}
                        </p>
                    );
                })}
                <button onClick={resetData}>RESET</button>
            </Container>
        </ThemeProvider>
    );
}

export default App;
