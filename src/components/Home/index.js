// Write your code here
import {Component} from 'react'
import './index.css'
// eslint-disable-next-line no-unused-vars
import Message from '../Message'
// eslint-disable-next-line no-unused-vars
import Login from '../Login'
// eslint-disable-next-line no-unused-vars
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickFunction = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="main-container">
        <div className="background-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClickFunction} />
          ) : (
            <Login login={this.onClickFunction} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
