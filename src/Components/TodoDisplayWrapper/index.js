import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TodoCard from "../../Molecules/TodoCard";
import GroupRadio from "../../Molecules/GroupRadio";

import { sortByHighPriority, sortByLowPriority, sortByMediumPriority } from "../../Utils/sort";
  


const TodoDisplayWrapper = ({todoList, handleEdit, handleDelete}) => {

    const [list,setList] = useState([]);

    useEffect(()=>{
        setList(todoList);
    },[todoList])

    const handleEditClick = (idx,item) => {
        handleEdit && handleEdit(idx,item)
    }

    const handleDeleteClick = (idx) => {
        handleDelete && handleDelete(idx);
    }

    const handleSort = (e) => {
        const sortBy = (e.target.value);
        if(sortBy === 'high'){
            const sortedItems = sortByHighPriority(list);
            setList([...sortedItems]);
        }
        if(sortBy === 'medium'){
            const sortedItems = sortByMediumPriority(list);
            setList([...sortedItems]);
        }
        if(sortBy === 'low'){
            const sortedItems = sortByLowPriority(list);
            setList([...sortedItems]);
        }
    }

    return (
        <>
          {list?.length ? <GroupRadio handleChange={handleSort}/> : null}  
          {list.length ? list.map((item, idx) => (
            <Box key={idx} sx={{ minWidth: 275 }}>
              <TodoCard variant="outlined" key = {idx} todo={item?.todo} priority={item?.priority} description={item?.description}/>
              <Button onClick={e => handleEditClick(idx,item)}>Edit</Button>
              <Button onClick = {e => handleDeleteClick(idx)}>Delete</Button>
            </Box>
          )) : <p>No items in the list</p>}
        </>
    );
    
}

export default TodoDisplayWrapper;