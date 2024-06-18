import React, {useState, useEffect} from "react";
import Stack from '@mui/material/Stack';
import InputField from "../../Molecules/InputField";
import Button from '@mui/material/Button';

const FORM_INITIAL_STATE = {
    todo:'',
    description: ''
}

const InputWrapper = ({setTodoList, setEditIem, handleEditSave,editItem}) => {
    const [formData, setFormData] = useState(FORM_INITIAL_STATE)
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        setFormData(formData =>  editItem.hasOwnProperty('id') ? editItem?.item : formData)
    },[editItem])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.todo) {
            tempErrors.todo = 'This field is required';
        }
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempErrors = validate();
        if (Object.keys(tempErrors).length === 0) {
            if(editItem.hasOwnProperty('id')){
                handleEditSave && handleEditSave({item: formData, idx: editItem?.id});
            }else{
                setTodoList(todoList => [...todoList,formData]);
            }
            setFormData(FORM_INITIAL_STATE);
        } else {
            setErrors(tempErrors);
        }
    };    

    return (
        <Stack spacing={2} direction="row">
            <form onSubmit={handleSubmit}>
                <div>  
                    <InputField label="Enter Todo*" name={"todo"} field={formData.todo} setField={handleChange}/>
                    {errors.todo && <p style={{ color: 'red' }}>{errors.todo}</p>}
                </div>
                <div>
                    <InputField label="Enter Description" name={"description"} field={formData.description} setField={handleChange}/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Stack>
    )
}

export default InputWrapper;