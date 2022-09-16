import React, {useState, useEffect} from 'react';
import ControlledModal from './components/LayoutComponents/ControlledModal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from './components/LayoutComponents/List'
import ProjectCard from './components/Projects/ProjectCard'
import './App.css';

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
  }
]

function App() {
  useEffect(() => {
      console.log("Projects ",projects)
  },[])

  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
    <Box sx={{bgcolor: '#659DBD', height: '100vh', overflow: 'auto', textAlign: 'center',}}>
      <Box sx={{ mb: 4, color: '#ffff'}}>
        <h1>Useful Components</h1> 

        {/* 
          Controlled Modal ------------
          shouldShow: boolean passed on whether or not to show the modal
          onRequestClose: function passed to close or interact with the modal once it is open
          children: Anything between the <ControlledModal></ControlledModal> tags will be apart
          of the children prop that gets added to the modal making it dynamic
        */}
        <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
          setShouldShowModal(false)
        }}>
          <h1>Test Heading</h1>
          <Box>
            <p>Hello World!</p>
            <p>Test</p>
          </Box>
        </ControlledModal>
        <Button variant="contained" onClick={() => setShouldShowModal(!shouldShowModal)}>Show Modal</Button>

      </Box>
      
      {/* 
        items: prop is an array that is to be iterated over
        resourceName: prop of the list item that is getting passed
        ItemComponent: the list item component to be used to build the list
      */}
      <Box sx={{display: 'flex', justifyContent: 'space-between', ml: 8, mr: 8}}>
        <List items={projects} resourceName="project" ItemComponent={ProjectCard} />
      </Box>
      
    </Box>
  );
}

export default App;
