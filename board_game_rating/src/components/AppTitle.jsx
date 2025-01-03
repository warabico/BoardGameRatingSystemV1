// Libraries
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

// Icons
import ExtensionIcon from "@mui/icons-material/Extension";

const AppTitle = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <ExtensionIcon fontSize="medium" />
            <Typography variant="h6">Board Game Rating</Typography>
            <Chip size="small" label="V1" color="info" />
        </Stack>
    );
};

export default AppTitle;
