import axios from 'axios'
import { statSync } from 'fs'
import {useState, useEffect} from 'react'

const capitalize = (str: string) => str.charAt(0).toUpperCase + str.slice(1)

const withEditableResource = ({Component, resourcePath, resourceName}:{Component:any, resourcePath:string, resourceName:string}) => {
  return (props: any) => {
    const [originalData, setOriginalData] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
        (async() => {
            const response = await axios.get(resourcePath)
            setOriginalData(response.data)
            setData(response.data)
        })
    }, [])
    
    const onChange = (changes: any) => {
        setData({...data, ...changes})
    }

    const onSave = async () => {
        const response = await axios.post(resourcePath, {[resourceName]: data})
        setOriginalData(response.data)
        setData(response.data)

    }


    const onReset = () => {
        setData(originalData)
    }

    const resourceProps = {
        [resourceName]: data,
        [`onChange${capitalize(resourceName)}`]: onChange,
        [`onSave${capitalize(resourceName)}`]: onSave,
        [`onReset${capitalize(resourceName)}`]: onReset,

    }

    return <Component {...props} {...resourceProps}/>

  }
}

export default withEditableResource