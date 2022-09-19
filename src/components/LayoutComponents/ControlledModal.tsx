import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ControlledModal = ({shouldShow, onRequestClose, children} : {shouldShow:boolean, onRequestClose:any, children:any}) => {
    
    return shouldShow ? (
        <Box onClick={onRequestClose} sx={{position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', overflow: 'auto', bgcolor: 'rgba(0,0,0,0.5)' }}>
            <Box onClick={e => e.stopPropagation()} sx={{bgcolor: 'white', m: '10% auto', width: '50%', textAlign: 'left', borderRadius: 1}}>
                <Box sx={{p:1, }}>
                    {children}
                </Box>
                <Box sx={{width: '100%', m:0, bgcolor: 'rgba(0, 0, 0, 0.1)'}}>
                    <Button variant="contained" size="small" onClick={onRequestClose} sx={{m:1}}>Close</Button>
                </Box>
            </Box>
        </Box>
    ) : null
}

export default ControlledModal