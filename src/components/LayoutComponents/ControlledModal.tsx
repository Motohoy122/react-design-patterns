import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ControlledModal = ({shouldShow, onRequestClose, children} : {shouldShow:boolean, onRequestClose:any, children:any}) => {
    // display: 'flex', justifyContent: 'space-around', alignItems: 'center',
    return shouldShow ? (
        <Box onClick={onRequestClose} sx={{ display: 'flex', position: 'fixed', justifyContent: 'space-around', alignItems: 'center', zIndex: 100000,left: 0, top: 0, width: '100%', height: '100vh', overflowY: 'auto', overflowX: 'hidden', boxSizing: 'border-box', bgcolor: 'rgba(0,0,0,0.8)', }}>
            <Box onClick={e => e.stopPropagation()} sx={{position: 'relative', bgcolor: 'white', minWidth: '30%', maxWidth: '40%', mb: '10%', minHeight: '25%', height: 'fit-content', textAlign: 'left', borderRadius: 1, }}>
                <Box sx={{p:1, }}>
                    {children}
                </Box>
                <Box sx={{width: '100%', position: 'absolute', left: 0, bottom: 0, m:0, bgcolor: 'rgba(0, 0, 0, 0.1)'}}>
                    <Button variant="contained" size="small" onClick={onRequestClose} sx={{m:1}}>Close</Button>
                </Box>
            </Box>
        </Box>
    ) : null
}

export default ControlledModal