import React, { Component } from 'react';
// import App2 from './src/components/App2'


class AppRouter extends Component {
  render() {
    return(
      <Router>

        <Scene key='auth' type={ActionConst.RESET}>
          <Scene key='login' component={LoginForm} title='Login' hideNavBar />
          <Scene key='register' component={RegisterForm} title='Register' hideNavBar />
        </Scene>

        <Scene key='main'>
          <Scene key='map' component={App2} title='Map' hideNavBar />
        </Scene>

      </Router>
    )
  }
}



export default AppRouter;