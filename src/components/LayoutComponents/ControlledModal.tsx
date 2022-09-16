import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ControlledModal = ({shouldShow, onRequestClose, children} : {shouldShow:boolean, onRequestClose:any, children:any}) => {
    
    return shouldShow ? (
        <Box onClick={onRequestClose} sx={{position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', bgcolor: 'rgba(0,0,0,0.5)' }}>
            <Box onClick={e => e.stopPropagation()} sx={{bgcolor: 'white', m: '10% auto', p: '20px', width: '50%'}}>
                {children}
                <Button variant="contained" onClick={onRequestClose} >Close</Button>
            </Box>
        </Box>
    ) : null
}

export default ControlledModal