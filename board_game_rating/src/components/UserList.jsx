import UserInformation from "./UserInformation";
import Grid from "@mui/material/Grid2";

const UserList = ({ users = [], joinUsersState }) => {
    const [joinUsers, setJoinUsers] = joinUsersState;

    const addJoinUser = (user) => {
        let newJoinUsers = [...joinUsers];
        newJoinUsers.push({ id: user.id, order: -1 });
        newJoinUsers = newJoinUsers.map((newJoinUser, idx) => ({
            id: newJoinUser.id,
            order: idx + 1,
        }));
        setJoinUsers(newJoinUsers);
    };

    const delJoinUser = (user) => {
        let newJoinUsers = [...joinUsers];
        newJoinUsers = newJoinUsers.filter(
            (newJoinUser) => newJoinUser.id !== user.id
        );
        newJoinUsers = newJoinUsers.map((newJoinUser, idx) => ({
            id: newJoinUser.id,
            order: idx + 1,
        }));
        setJoinUsers(newJoinUsers);
    };

    return (
        <>
            <br />
            <h2>Users</h2>
            <Grid container columnSpacing={2}>
                {users
                    .sort((a, b) => b.rating - a.rating)
                    .map((user) => (
                        <UserInformation
                            key={user.id}
                            join={
                                joinUsers.findIndex(
                                    (joinUser) => joinUser.id === user.id
                                ) !== -1
                            }
                            user={user}
                            add={addJoinUser}
                            del={delJoinUser}
                        />
                    ))}
            </Grid>
        </>
    );
};

export default UserList;
