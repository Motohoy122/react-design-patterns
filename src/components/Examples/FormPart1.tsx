import {useState} from 'react'
import FormLayout from "../LayoutComponents/FormLayout"
import { TextField,  } from '@mui/material';

const FormPart1 = ({goToNext}:{goToNext: any}) => {
    const defaultValue = {
        lotNumbers: '',
        slabType: '',
        startDate: ''
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
        <FormLayout formTitle='Form Part 1' headerArr={[{id: 'builder', label: 'Builder', value: 'B1'}, {id: 'jobName', label: 'Job Name', value: 'J1'}, {id: 'supervisor', label: 'Supervisor', value: 'super 1'}]}  buttonLabel="Next" submitFunc={() => goToNext(form1Data)}>
            <TextField id="lotNumbers" name="lotNumbers" label="Lot Numbers" variant="outlined" value={form1Data.lotNumbers} onChange={handleInputChange}/>
            <TextField id="slabType" name="slabType" label="Slab Type" variant="outlined" value={form1Data.slabType} onChange={handleInputChange} />
            <TextField id="startDate" name="startDate" label="Start Date" variant="outlined" value={form1Data.startDate} onChange={handleInputChange} />
        </FormLayout>
    )
}

export default FormPart1