import { useParams } from "react-router-dom"
const About = () => {
  const {id} =  useParams();
  return (
    <div>
      <h3>About us:{id}</h3>
    </div>
  )
}

export default About
