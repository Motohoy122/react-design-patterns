import {useState} from 'react'
import FormLayout from "../LayoutComponents/FormLayout"
import { TextField,  } from '@mui/material';

const FormPart3 = ({goToNext}:{goToNext: any}) => {
    const defaultValue = {
        finalValue: '',
    }

    const [form1Data, setForm1Data] = useState(defaultValue)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // console.log(value)
        setForm1Data({
        ...form1Data,
        [name]: value,
        });
    }
    return (
        <FormLayout formTitle='Form Part 3' headerArr={[{id: 'builder', label: 'Builder', value: 'B1'}, {id: 'jobName', label: 'Job Name', value: 'J1'}, {id: 'supervisor', label: 'Supervisor', value: 'super 1'}]}  buttonLabel="Submit" submitFunc={() => goToNext(form1Data)}>
            <TextField id="finalValue" name="finalValue" label="Final Value" variant="outlined" value={form1Data.finalValue} onChange={handleInputChange}/>
        </FormLayout>
    )
}

export default FormPart3