import './Login.css'

import Card from '../UI/Card'
import Button from '../UI/Button'

const Login = () => {

    const [enteredEmail, setEnteredEmail] = useSate('')
    const [enteredPassword, setEnteredPassword] = useState('')


    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    }



    return (
        <Card className='login'>
            <form>
                <div className='control'>
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}    
                    ></input>
                </div>
                <div className='control'>
                    <label for="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}    
                    ></input>
                </div>
                <div className='actions'>
                    <Button type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;