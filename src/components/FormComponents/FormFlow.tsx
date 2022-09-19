import React, {useEffect} from 'react'

const FormFlow = ({children, currentIndex, onNext, completedFlow}: {children:any, currentIndex: number, onNext: any, completedFlow: any}) => {
    const childrenArrLength = React.Children.toArray(children).length
    useEffect(()=> {
        if(currentIndex === childrenArrLength) {
            completedFlow()
        }
    }, [currentIndex])

    const goToNext = (stepData:any) => {
        onNext(stepData)
    }

    // const submitFinal = (stepData:any) => {
    //     onFinal(stepData)

    // }

    const currentChild = React.Children.toArray(children)[currentIndex]

    console.log("Children Array Length: ", childrenArrLength, "Current Index: ", currentIndex)
    // if(childrenArrLength === currentIndex) {
    //     submitFinal()
    // }

    // console.log("Current Child ",currentChild)
    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goToNext} as any)
    }

    return <>{currentChild}</>
}

export default FormFlow