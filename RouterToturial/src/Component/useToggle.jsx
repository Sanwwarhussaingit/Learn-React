import { useState } from "react"

const useToggle = (initalValue = false) => {

    const [value,setValue]=useState(initalValue);
    const toggle = ()=> {
        return setValue(!value);
    }
  return [value,toggle]
}

export default useToggle
