import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Gauge } from "@mui/x-charts/Gauge";
import Grid from "@mui/material/Grid2";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

const UserInformation = ({ user, join, add, del }) => {
    const changeJoin = () => {
        if (join) {
            del(user);
        } else {
            add(user);
        }
    };

    return (
        <>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                    key={user.id}
                    sx={{ my: 2 }}
                    variant={join ? "outlined" : "elevation"}
                >
                    <CardHeader
                        avatar={
                            <IconButton
                                aria-label="join"
                                onClick={changeJoin}
                                style={
                                    join
                                        ? { background: "red" }
                                        : { background: "green" }
                                }
                            >
                                {join ? (
                                    <PersonRemoveAlt1Icon />
                                ) : (
                                    <PersonAddAlt1Icon />
                                )}
                            </IconButton>
                        }
                        action={
                            <Gauge
                                width={70}
                                height={70}
                                value={user.rating}
                                valueMin={0}
                                valueMax={2000}
                                sx={{ fontSize: "12px", fontWeight: "bold" }}
                            />
                        }
                        title={user.username}
                        subheader={user.rating}
                    />
                </Card>
            </Grid>
        </>
    );
};

export default UserInformation;
