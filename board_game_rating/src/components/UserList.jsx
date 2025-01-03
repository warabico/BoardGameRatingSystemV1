import UserInformation from "./UserInformation";

const UserList = ({ users = [] }) => {
    return (
        <>
            {users
                .sort((a, b) => b.rating - a.rating)
                .map((user, idx) => (
                    <UserInformation key={idx} user={user} idx={idx} />
                ))}
        </>
    );
};

export default UserList;
