import AppDashBoard from "./components/AppDashBoard";

function App() {
    return (
        // <ThemeProvider theme={theme}>
        //     <AppNavbar />
        //     <Container maxWidth="lg">
        //         <UserRegistration register={addUser} reset={resetData} />
        //         <Divider />
        //         <UserList
        //             users={users}
        //             joinUsersState={[joinUsers, setJoinUsers]}
        //         />
        //         <Divider />
        //         <JoinUserList
        //             users={users}
        //             joinUsersState={[joinUsers, setJoinUsers]}
        //         />
        //     </Container>
        // </ThemeProvider>
        <AppDashBoard />
    );
}

export default App;
