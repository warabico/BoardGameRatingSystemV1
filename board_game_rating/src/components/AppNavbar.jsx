import { AppBar, Toolbar, Typography } from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";

const AppNavbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <ExtensionIcon sx={{ mr: 2 }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Board Game Rating System V1
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppNavbar;
