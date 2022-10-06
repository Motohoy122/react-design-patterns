import {useEffect, useState} from 'react'
import FormFlow from '../FormComponents/FormFlow'
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';

import { Typography, Box, Button } from '@mui/material';

// Psuedo info for Form Flow
const StepOne = ({goToNext}:{goToNext: any}) => (
    <>
      <Typography variant="h3" component="div">
        Step 1
      </Typography>
      <Button onClick={() => goToNext({name: 'John Doe'})}>Next</Button>
    </>
  )
  
  // const StepTwo = ({goToNext}:{goToNext: any}) => (
  //   <>
  //     <Typography variant="h3" component="div">
  //       Step 2
  //     </Typography>
  //     <Button onClick={() => goToNext({age: 100})}>Next</Button>
  //   </>
  // )
  
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

const ExampleFormFlow = () => {
    // Flow Form State
    const [formFlowData, setFormFlowData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [completedFlow, setCompletedFlow] = useState(false)

    // Flow Form indexing and form data handling
    const onNext = (stepData:any) => {
    setFormFlowData({...formFlowData, ...stepData})
    setCurrentIndex(currentIndex + 1)
    }
  // Flow Form submission. Add any submission actions in the onFinal event handler
  const onFinal = () => {
    const formKeys = Object.keys(formFlowData)
    const formValues = Object.values(formFlowData)
    alert(`You have completed the form! Here is your data: 
      \n ${formKeys[0]}: ${formValues[0]} 
      \n ${formKeys[1]}: ${formValues[1]} 
      \n ${formKeys[2]}: ${formValues[2]} 
      \n ${formKeys[3]}: ${formValues[3]}
      \n ${formKeys[4]}: ${formValues[4]}
      \n ${formKeys[5]}: ${formValues[5]}
    `)

    setTimeout(()=>{
      alert('resetting the form')
      setCurrentIndex(0)
    },3000)
  }

  useEffect(() => {
      if(completedFlow) {
        onFinal()
        setCompletedFlow(false)
      }
      
  },[completedFlow, onFinal])
  return (
    <>
        {/* 
          currentIndex: the index in the array of children. Keeps track of what form the user is on

          onNext: a function that is defined in the parent, allowing the user to move to the next form and store data
          this function can be defined uniquely for each FormFlow

          completedFlow: a function that is passed into a useEffect hook in FormFlow to dictate when the form flow has been
          completed. On completion, the user can decide what to do with the data. In this app I utilize it in the App.js useEffect
          hook
        */}
        <FormFlow currentIndex={currentIndex} onNext={onNext} completedFlow={()=>setCompletedFlow(true)}>
          <FormPart1 goToNext={() => null}/>
          <FormPart2 goToNext={() => null}/>
          {/* {formFlowData.age >= 65 && <StepThree goToNext={() => null}/> } */}
          <FormPart3 goToNext={() => null}/>
        </FormFlow>
       
      </>
  )
}

export default ExampleFormFlow