import{useContext} from "react"
import { LoginContext } from "../../App"
function SingleComponent()
{
    const Login =  useContext(LoginContext)
    console.log(Login);
    return(
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default SingleComponent