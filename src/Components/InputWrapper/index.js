import React, {useState, useEffect} from "react";
import './style.css';
import Stack from '@mui/material/Stack';
import InputField from "../../Molecules/InputField";
import Button from '@mui/material/Button';

const FORM_INITIAL_STATE = {
    todo:'',
    description: '',
    priority: 'low',
}

const InputWrapper = ({setTodoList, handleEditSave,editItem}) => {
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
        if(formData.priority !== 'hight' || formData.priority!== 'low' || formData.priority!=='medium'){
            tempErrors.priority = 'Please enter high or low or medium'
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
        <div className="form">
            <Stack spacing={2} direction="col">
                <form onSubmit={handleSubmit}>
                    <div>  
                        <InputField label="Enter Todo*" name={"todo"} field={formData.todo} setField={handleChange}/>
                        {errors.todo && <p style={{ color: 'red' }}>{errors.todo}</p>}
                    </div>
                    <div>
                        <InputField label="Enter Description" name={"description"} field={formData.description} setField={handleChange}/>
                    </div>
                    <div>
                        <InputField label="Enter Priority" name={"priority"} field={formData.priority} setField={handleChange}/>
                        {errors.priority && <p style={{ color: 'red' }}>{errors.priority}</p>}
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Stack>
        </div>
    )
}

export default InputWrapper;