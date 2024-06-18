import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TodoCard from "../../Molecules/TodoCard";
  


const TodoDisplayWrapper = ({todoList, handleEdit, handleDelete}) => {

    const handleEditClick = (idx,item) => {
        handleEdit && handleEdit(idx,item)
    }

    const handleDeleteClick = (idx) => {
        handleDelete && handleDelete(idx);
    }

    return (
        <>
          {todoList.length ? todoList.map((item, idx) => (
            <Box key={idx} sx={{ minWidth: 275 }}>
              <TodoCard variant="outlined" key = {idx} todo={item?.todo} description={item?.description}/>
              <Button onClick={e => handleEditClick(idx,item)}>Edit</Button>
              <Button onClick = {e => handleDeleteClick(idx)}>Delete</Button>
            </Box>
          )) : <p>No items in the list</p>}
        </>
    );
    
}

export default TodoDisplayWrapper;