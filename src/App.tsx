import React, {useState, useEffect} from 'react';
import ControlledModal from './components/LayoutComponents/ControlledModal';
import FormFlow from './components/FormComponents/FormFlow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from './components/LayoutComponents/List'
import ProjectCard from './components/Projects/ProjectCard'
import './App.css';
import { Typography } from '@mui/material';

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

// Psuedo info for Form Flow
const StepOne = ({goToNext}:{goToNext: any}) => (
  <>
    <Typography variant="h3" component="div">
      Step 1
    </Typography>
    <Button onClick={() => goToNext({name: 'John Doe'})}>Next</Button>
  </>
)

const StepTwo = ({goToNext}:{goToNext: any}) => (
  <>
    <Typography variant="h3" component="div">
      Step 2
    </Typography>
    <Button onClick={() => goToNext({age: 100})}>Next</Button>
  </>
)

const StepThree = ({goToNext}:{goToNext: any}) => (
  <>
    <Typography variant="h3" component="div">
      Congrats, you are old enough!
    </Typography>
    <Button onClick={() => goToNext({})}>Next</Button>
  </>
)

const StepFour = ({goToNext}:{goToNext: any}) => (
  <>
    <Typography variant="h3" component="div">
      Step 4
    </Typography>
    <Button onClick={() => goToNext({})}>Next</Button>
  </>
)

function App() {

  // Modal State
  const [shouldShowModal, setShouldShowModal] = useState(false)

  // Flow Form State
  const [formFlowData, setFormFlowData] = useState<{name: string, age: number, eyeColor: string}>({name:'', age:0, eyeColor: 'blue'})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [completedFlow, setCompletedFlow] = useState(false)

  useEffect(() => {
      if(completedFlow) {
        onFinal()
        setCompletedFlow(false)
      }
      
  },[completedFlow])

  // Flow Form indexing and form data handling
  const onNext = (stepData:any) => {
    setFormFlowData({...formFlowData, ...stepData})
    setCurrentIndex(currentIndex + 1)
  }

  // Flow Form submission. Add any submission actions in the onFinal event handler
  const onFinal = () => {
    alert(`You have completed the form! \nName: ${formFlowData.name} \nAge: ${formFlowData.age} \nEye-Color: ${formFlowData.eyeColor}`)

    setTimeout(()=>{
      alert('resetting the form')
      setCurrentIndex(0)
    },3000)
  }

  console.log("Completed Flow ", completedFlow)

  return (
    <Box sx={{bgcolor: '#659DBD', height: '100vh', overflow: 'auto', textAlign: 'center',}}>
      <Box sx={{ mb: 4, }}>
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
          <Typography variant="h5" sx={{mt: 0, mb:1, pl:0.5, pr: 0.5, fontWeight: 'bold'}}>Test Heading</Typography>
          <Box sx={{pl:1, pr: 1, mb: 1}}>
            <Typography sx={{mt: 0, mb:0,}}>Hello World!</Typography>
            <Typography sx={{mt: 0, mb:0}}>Test</Typography>
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
        {/* <List items={projects} resourceName="project" ItemComponent={ProjectCard} itemEventHandler={handleExpansion}/> */}
        <List items={projects} resourceName="project" ItemComponent={ProjectCard} />

      </Box>

      <Box sx={{mt:4}}>
        <FormFlow currentIndex={currentIndex} onNext={onNext} completedFlow={()=>setCompletedFlow(true)}>
          <StepOne goToNext={() => null}/>
          <StepTwo goToNext={() => null}/>
          {formFlowData.age >= 65 && <StepThree goToNext={() => null}/> }
          <StepFour goToNext={() => null}/>
        </FormFlow>
      </Box>
      
    </Box>
  );
}

export default App;
