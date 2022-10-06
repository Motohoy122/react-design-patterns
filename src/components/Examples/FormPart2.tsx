import {useState} from 'react'
import FormLayout from "../LayoutComponents/FormLayout"
import { TextField,  } from '@mui/material';

const FormPart2 = ({goToNext}:{goToNext: any}) => {
    const defaultValue = {
        superName: '',
        jobType: '',
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
        <FormLayout formTitle='Form Part 2' headerArr={[{id: 'builder', label: 'Builder', value: 'B1'}, {id: 'jobName', label: 'Job Name', value: 'J1'}, {id: 'supervisor', label: 'Supervisor', value: 'super 1'}]}  buttonLabel="Next" submitFunc={() => goToNext(form1Data)}>
            <TextField id="superName" name="superName" label="Super Name" variant="outlined" value={form1Data.superName} onChange={handleInputChange}/>
            <TextField id="jobType" name="jobType" label="Job Type" variant="outlined" value={form1Data.jobType} onChange={handleInputChange} />
        </FormLayout>
    )
}

export default FormPart2