import {useEffect} from 'react'
const List = ({items, resourceName, ItemComponent}: {items: any, resourceName: string, ItemComponent: any}) => {
    useEffect(() => {
        console.log(items)
    },[])
    return(
    <>
       {
            items.map((item: any, i: number) => (
                <>
                    <ItemComponent key={item.id ? item.id : i} {...{ [resourceName]: item }} />
                </>
            ))
        }
    </>)
}

export default List