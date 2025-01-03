const UserInformation = ({ user, idx }) => {
    return (
        <>
            <p key={idx}>
                {idx} : {user.username} RATING = {user.rating}
            </p>
        </>
    );
};

export default UserInformation;
