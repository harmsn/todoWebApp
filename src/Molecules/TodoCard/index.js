import React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TodoCard = ({todo,description, priority}) => {
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {todo}
                </Typography>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
                <Typography component="div">
                    Priority -: {priority}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
}

export default TodoCard