import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
const BreadCrumb = () => {
    return (
        <AppBar position="static">
            <Typography variant="h6" color="inherit" component="div">
                Welecome to your Todo App
            </Typography>
        </AppBar>
    )
}

export default BreadCrumb;