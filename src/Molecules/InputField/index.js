import React from "react";
import TextField from '@mui/material/TextField';

const InputField = ({field,setField, label, name}) => {
    return (
        <TextField id="standard-basic" name={name} value={field} onChange={e => setField(e)} label={label} variant="standard" />
    );
}

export default InputField;