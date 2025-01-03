import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import { Gauge } from "@mui/x-charts/Gauge";

const UserInformation = ({ user, idx }) => {
    return (
        <>
            <Card key={idx} sx={{ my: 2 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {user.username[0]}
                        </Avatar>
                    }
                    action={
                        <Gauge
                            width={90}
                            height={90}
                            value={user.rating}
                            valueMin={0}
                            valueMax={3000}
                        />
                    }
                    title={user.username}
                    subheader={"active"}
                />
            </Card>
        </>
    );
};

export default UserInformation;
