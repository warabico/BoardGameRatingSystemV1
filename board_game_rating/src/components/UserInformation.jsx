import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import { red, green } from "@mui/material/colors";
import { Gauge } from "@mui/x-charts/Gauge";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

const UserInformation = ({ user, idx }) => {
    const [join, setJoin] = useState(false);

    const changeJoin = () => {
        setJoin((prev) => !prev);
    };

    return (
        <>
            <Card
                key={idx}
                sx={{ my: 2 }}
                variant={join ? "outlined" : "elevation"}
            >
                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: join ? red[500] : green[500] }}
                            aria-label="recipe"
                        >
                            <b>{user.username[0]}</b>
                        </Avatar>
                    }
                    action={
                        <Gauge
                            width={90}
                            height={90}
                            value={user.rating}
                            valueMin={0}
                            valueMax={2000}
                        />
                    }
                    title={user.username}
                    subheader={join ? "Join" : "Not Join"}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="join" onClick={changeJoin}>
                        {join ? (
                            <PersonRemoveAlt1Icon />
                        ) : (
                            <PersonAddAlt1Icon />
                        )}
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default UserInformation;
