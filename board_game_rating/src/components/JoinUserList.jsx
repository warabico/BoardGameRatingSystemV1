import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const JoinUserList = ({ users, joinUsersState }) => {
    const [joinUsers, setJoinUsers] = joinUsersState;

    return (
        <>
            <List>
                {joinUsers.map((joinUser) => {
                    return (
                        <ListItem key={joinUser.id}>
                            <ListItemAvatar>
                                <Avatar>{joinUser.order}</Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                {
                                    users.find(
                                        (user) => user.id === joinUser.id
                                    ).username
                                }
                            </ListItemText>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                sx={{ mr: 1 }}
                                disabled={joinUser.order === 1}
                            >
                                <ArrowUpwardIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                disabled={joinUser.order === joinUsers.length}
                            >
                                <ArrowDownwardIcon />
                            </IconButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
};

export default JoinUserList;
