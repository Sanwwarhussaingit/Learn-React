import { useSelector } from "react-redux"

const Header = () => {
  const c=useSelector((s)=>s.counter)
  return (
    <h1 className="display-5 fw-bold text-body-emphasis">Counter: {c}</h1>
  )
}

export default Header
