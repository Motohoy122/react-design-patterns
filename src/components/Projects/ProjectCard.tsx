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
const ProjectCard = ({project}: {project: any}) => {
   
    return (
        <Card sx={{ maxWidth: 280 }}>
            <CardContent sx={{pb: 0}}>
                <Typography gutterBottom variant="h5" component="div">
                    {project.builder} - {project.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {project.jobCode}
                </Typography>
                <Accordion sx={{boxShadow: 'none', border: 'none', mt: 0, mb: 0, '&:before': {
                    display: 'none',
                }}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{maxWidth: '5%', ml: 'auto', mr: 'auto', mt: 0, mb: 0, bgcolor: '#fffff'}}
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{textAlign: 'left'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </CardContent>
            <CardActions sx={{m:1}}>
                <Button variant="contained" size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        )

}

export default ProjectCard