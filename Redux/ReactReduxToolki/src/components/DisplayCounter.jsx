import { useSelector } from "react-redux"

function DisplayCounter() {

  const counterObj = useSelector((store) => store.counter)
  const counter = counterObj.counterVal;
  return <p className="lead md-4">Counter value:{counter} </p>
}

export default DisplayCounter

  