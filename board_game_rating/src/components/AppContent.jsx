import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import UserRegistration from "./UserRegistration";
import UserList from "./UserList";

const STORAGE_KEY_USERS = "local-storage-users";
const STORAGE_KEY_HISTORIES = "local-storage-histories";

const getLocalData = (key) => JSON.parse(localStorage.getItem(key));
const saveLocalData = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));

const AppRouter = ({ content }) => {
    let restoredUsers = getLocalData(STORAGE_KEY_USERS) ?? [];
    let restoredHistories = getLocalData(STORAGE_KEY_HISTORIES) ?? [];

    const [users, setUsers] = useState(restoredUsers);
    const [joinUsers, setJoinUsers] = useState([]);
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

    switch (content) {
        case "/user_reg":
            return <UserRegistration register={addUser} reset={resetData} />;

        case "/game":
            return <>game</>;

        case "/user_info":
            return (
                <UserList
                    users={users}
                    joinUsersState={[joinUsers, setJoinUsers]}
                />
            );

        case "/results":
            return <>results</>;

        case "/rating":
            return <>rating</>;

        default:
            return <></>;
    }
};

const AppContent = ({ content }) => {
    return (
        <Container maxWidth="lg">
            <AppRouter content={content} />
        </Container>
    );
};

export default AppContent;
