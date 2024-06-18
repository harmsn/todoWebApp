import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TodoCard = ({todo,description}) => {



     return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {todo}
                </Typography>
                <Typography variant="h5" component="div">
                    {description}
                </Typography>
            </CardContent>
        </React.Fragment>
);
}

export default TodoCard