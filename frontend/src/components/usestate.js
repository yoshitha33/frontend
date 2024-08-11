import { useEffect, useState } from "react"


export const UseStateFunction = () => {
    const [count, setCount] = useState(0)
  const Count = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        setCount(count + 34)
    }, [count])

    

    return (
        <>
            <h2>My count is : {count}</h2>
            <button onClick={() => Count()}>Update count</button>

            

        </>
    )
}