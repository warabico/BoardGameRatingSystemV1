import UserInformation from "./UserInformation";

const UserList = ({ users = [] }) => {
    return (
        <>
            {users.map((user, idx) => (
                <UserInformation user={user} idx={idx} />
            ))}
        </>
    );
};

export default UserList;
