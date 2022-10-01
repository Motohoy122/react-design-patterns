import {useState} from 'react'
import { Typography, Box, Button } from '@mui/material';

const FormLayout = ({formTitle, headerArr, children}:{formTitle:string, headerArr: any, children: any}) => {
    const [formData, setFormData] = useState({})
    return (
        <Box sx={{ width: '100%', flexWrap: 'wrap', textAlign: 'left', ml: 'auto', mr: 'auto', height: 'fit-content',  }}>
            {/* Title */}
            <Typography variant="h3" sx={{pb:2}}>{formTitle}</Typography>

            {/* Form Header */}
            {headerArr.length > 0 ? <Box sx={{display: 'flex', flexWrap: 'wrap',width: '100%', justifyContent: 'space-around', mb: 4, bgcolor: 'rgba(0, 0, 0, 0.1)', p:2}}>
                {
                    headerArr.map((obj: {label: string, value: string}) => {
                        return (<Typography sx={{fontWeight: 'bold'}}>{obj.label}: {obj.value}</Typography>)
                    })
                }
            </Box> : null}

            {/* Form Body */}
            <Box sx={{display: 'flex', width: '100%', justifyContent: 'space-around', pl: 2, pr: 2, pb: 4}}>
                {children}
            </Box>

            {/* Form Footer */}
            <Box sx={{ width: '100%', left: 0, bottom: 0, textAlign: 'right', pl: 4}}>
                <Button variant="contained" size="medium" sx={{ml: 1}}>Close</Button>
            </Box>
        </Box>
    )
}

export default FormLayout