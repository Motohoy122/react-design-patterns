import {useState, useEffect} from 'react';
// Import components
import ControlledModal from './components/LayoutComponents/ControlledModal';
import SideNavbar from './components/LayoutComponents/SideNavbar'
import List from './components/LayoutComponents/List'
import WaveDivider from './components/LayoutComponents/WaveDivider';
import ProjectCard from './components/Projects/ProjectCard'
import ExampleFormFlow from './components/Examples/ExampleFormFlow';

// Imports for MUI
import { Typography, Box, Button } from '@mui/material';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    builder: 'Builder 2',
    jobCode: 'B2P100',
    division: 1,
    totalLots: 100,
    jobType: 'Residential',
    slabType: 'PT',
    footingSize: '12x12',
    structuralEngineer: 'Harris & Sloan',
    latestStructDelta: 4,
    latestStarts: '05',
    flatwork: 'yes',
    cvcSuper: 'Super 1',
    cvcSuperEmail: 'super1@concretevalue.com',
    cvcSuperPhone: '9161111111',
    builderSuper: 'B Super 1',
    builderSuperEmail: 'super1@builder.com',
    builderSuperPhone: '9162222222',
    starts: [],
    contractProposal: []
  },
  {
    id: 2,
    name: 'Project 2',
    builder: 'Builder 2',
    jobCode: 'B2P200',
    division: 2,
    totalLots: 200,
    jobType: 'Residential',
    slabType: 'PT',
    footingSize: '12x12',
    structuralEngineer: 'Harris & Sloan',
    latestStructDelta: 4,
    latestStarts: '05',
    flatwork: 'yes',
    cvcSuper: 'Super 2',
    cvcSuperEmail: 'super2@concretevalue.com',
    cvcSuperPhone: '9262111111',
    builderSuper: 'B Super 2',
    builderSuperEmail: 'super2@builder.com',
    builderSuperPhone: '9162422222',
    starts: [],
    contractProposal: []
  },
  {
    id: 3,
    name: 'Project 3',
    builder: 'Builder 5',
    jobCode: 'B5P300',
    division: 3,
    totalLots: 300,
    jobType: 'Residential',
    slabType: 'PT',
    footingSize: '12x12',
    structuralEngineer: 'Harris & Sloan',
    latestStructDelta: 5,
    latestStarts: '05',
    flatwork: 'yes',
    cvcSuper: 'Super 7',
    cvcSuperEmail: 'super7@concretevalue.com',
    cvcSuperPhone: '9767771111',
    builderSuper: 'B Super 1',
    builderSuperEmail: 'super7@builder.com',
    builderSuperPhone: '9162992222',
    starts: [],
    contractProposal: []
  },
  {
    id: 4,
    name: 'Project 4',
    builder: 'Builder 4',
    jobCode: 'B4P400',
    division: 1,
    totalLots: 52,
    jobType: 'Residential',
    slabType: 'PT',
    footingSize: '12x12',
    structuralEngineer: 'Harris & Sloan',
    latestStructDelta: 5,
    latestStarts: '04',
    flatwork: 'yes',
    cvcSuper: 'Super 2',
    cvcSuperEmail: 'super2@concretevalue.com',
    cvcSuperPhone: '9267771111',
    builderSuper: 'B Super 1',
    builderSuperEmail: 'super7@builder.com',
    builderSuperPhone: '9162992222',
    starts: [],
    contractProposal: []
  }
]

function App() {
  // Modal State
  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
    <Box sx={{  display: 'flex', width: '100vw', bgcolor: '#659DBD', height: '100vh', overflowY: 'auto', textAlign: 'center', boxSizing: 'border-box', overflowX: 'hidden'}}>
      <Box sx={{width: 'fit-content'}}>
        <SideNavbar />
      </Box>
      
      <Box sx={{position: 'relative', width: '100%', boxSizing: 'inherit', overflowX: 'hidden'}}>
      <Box sx={{position: 'relative', height: '20vh', mb: 2, ml: 'auto', mr: 'auto', boxSizing: 'inherit',}}>
        <Typography variant="h3" sx={{mt: 2, mb: 2}}>Useful Components</Typography> 
        
        {/* 
          Controlled Modal ------------
          shouldShow: boolean passed on whether or not to show the modal
          onRequestClose: function passed to close or interact with the modal once it is open
          children: Anything between the <ControlledModal></ControlledModal> tags will be apart
          of the children prop that gets added to the modal making it dynamic
        */}
          <Box sx={{width:'100%', alignItems: 'center'}}>
            <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
              setShouldShowModal(false)
            }}>
              <Typography variant="h5" sx={{mt: 0, mb:1, pl:0.5, pr: 0.5, fontWeight: 'bold'}}>Test Heading</Typography>
              <Box sx={{pl:1, pr: 1, mb: 1}}>
                <Typography sx={{mt: 0, mb:0,}}>Hello World!</Typography>
                <Typography sx={{mt: 0, mb:0}}>Test</Typography>
              </Box>
            </ControlledModal>
            <Button variant="contained" onClick={() => setShouldShowModal(!shouldShowModal)}>Show Modal</Button>
          </Box>
        </Box>
      
      {/* 
        ------- 
        items: prop is an array that is to be iterated over
        resourceName: prop of the list item that is getting passed
        ItemComponent: the list item component to be used to build the list
      */}
      <Box sx={{position: 'relative', width:'100%', height: '80vh', display: 'flex',  }}>
        {/* <List items={projects} resourceName="project" ItemComponent={ProjectCard} itemEventHandler={handleExpansion}/> */}
        <Box sx={{width:'100%', display: 'flex', justifyContent: 'space-between', ml: 8, mr: 8, flexWrap: 'wrap', alignContent: 'flex-start', gap: '30px 10px', height: 'fit-content', }}>
          <List items={projects} resourceName="project" ItemComponent={ProjectCard} />
        </Box>

        
        <WaveDivider />
        
      </Box>
      <Box sx={{width: '100%', minHeight: '50%', bgcolor: '#ffff', pt: 2, pb: 2}}>
          <ExampleFormFlow />
      </Box>
      </Box>
      
    </Box>
  );
}

export default App;
