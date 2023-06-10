import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogged: false}

  changeBtn = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.changeBtn} />
          ) : (
            <Login login={this.changeBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
