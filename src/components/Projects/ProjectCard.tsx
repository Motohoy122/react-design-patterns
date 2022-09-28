import {useState} from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const ProjectCard = ({project, itemEventHandler}: {project: any, itemEventHandler: any}) => {
    const [expandAccordion, setExpandAccordion] = useState(-1)
    return (
        <Card key={project.id} sx={{ maxWidth: 275, height: 'fit-content'}}>
            <CardContent sx={{pb: 0, textAlign: 'left'}} 
                // onClick={() => {
                //     setExpandAccordion(expandAccordion === project.id? -1 : project.id)
                //     console.log(project.id)
                // }}
                >
                <Box>
                    <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold', mb: 0}}>
                        {project.name} - {project.jobCode}
                    </Typography>
                    <Typography gutterBottom variant="h6" sx={{mb:0, fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)'}}>
                        {project.builder}
                    </Typography>
                </Box>
                
                <Accordion 
                    
                    // expanded={expandAccordion === project.id ? true : false}
                    sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            boxShadow: 'none', 
                            border: 'none', 
                            mt: 0, 
                            mb: 0, 
                            '&:before': {
                                display: 'none',
                            }
                        }}
                    >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{order: 2, maxWidth: '5%', ml: 'auto', mr: 'auto', mt: 0, mb: 0, pt: 0, pb: 0, maxHeight: '2%', height: 'fit-content', bgcolor: '#fffff'}}
                    >
                    </AccordionSummary>
                    <AccordionDetails sx={{order: 1, p:0}}>
                    <Typography sx={{textAlign: 'left'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <CardActions sx={{m:0, pl:1, pb:1, pr:1, bgcolor: 'rgba(0, 0, 0, 0.1)'}}>
                <Button variant="contained" size="small">Share</Button>
                <Button size="small" sx={{ml:0}}>Edit</Button>
            </CardActions>
        </Card>
        )

}

export default ProjectCard