import { useSelector } from "react-redux"

function DisplayCounter() {

  const counter = useSelector((store) => store.counter)
  return <p className="lead md-4">Counter value: {counter}</p>
}

export default DisplayCounter
