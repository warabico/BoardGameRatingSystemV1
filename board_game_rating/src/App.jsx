import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import AppNavbar from "./components/AppNavbar";
import UserRegistration from "./components/UserRegistration";
import UserList from "./components/UserList";

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
            <AppNavbar />
            <Container
                maxWidth="lg"
                spacing={1}
                sx={{ my: 2, paddingTop: 2, paddingBottom: 2 }}
            >
                <UserRegistration register={addUser} />
                <UserList users={users} />
                <button onClick={resetData}>RESET</button>
            </Container>
        </ThemeProvider>
    );
}

export default App;
