// Libraries
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";

// Icons
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CasinoIcon from "@mui/icons-material/Casino";
import DescriptionIcon from "@mui/icons-material/Description";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Components
import AppContent from "./AppContent";
import AppTitle from "./AppTitle";

const NAVIGATION = [
    {
        kind: "header",
        title: "Menu",
    },
    {
        segment: "user_reg",
        title: "User Registration",
        icon: <PersonAddIcon />,
    },
    {
        segment: "game",
        title: "Game",
        icon: <CasinoIcon />,
    },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "History",
    },
    {
        segment: "user_info",
        title: "User Information",
        icon: <AccountCircleIcon />,
    },
    {
        segment: "results",
        title: "Game Results",
        icon: <DescriptionIcon />,
    },
    {
        segment: "rating",
        title: "Rating",
        icon: <TimelineIcon />,
    },
];

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

const AppDashBoard = () => {
    const router = useDemoRouter("/dashboard");

    return (
        <AppProvider navigation={NAVIGATION} router={router} theme={theme}>
            <DashboardLayout slots={{ appTitle: AppTitle }}>
                <AppContent content={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
};

export default AppDashBoard;
