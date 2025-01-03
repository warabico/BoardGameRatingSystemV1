import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";

// Icons
import ExtensionIcon from "@mui/icons-material/Extension";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CasinoIcon from "@mui/icons-material/Casino";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

const demoTheme = createTheme({
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

const DemoPageContent = ({ pathname }) => {
    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
};

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

const CustomAppTitle = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <ExtensionIcon fontSize="medium" />
            <Typography variant="h6">Board Game Rating</Typography>
            <Chip size="small" label="V1" color="info" />
        </Stack>
    );
};

const AppDashBoard = (props) => {
    const { window } = props;

    const router = useDemoRouter("/dashboard");

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout slots={{ appTitle: CustomAppTitle }}>
                <DemoPageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
};

AppDashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default AppDashBoard;
