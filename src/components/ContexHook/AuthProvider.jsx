import React, { Component } from 'react';
import authContext from './authContext';

export default class AuthProvider extends Component {
  state = {
    user: null,
    login: () => {
      this.state({ user: 'mango' });
    },
    loguot: () => {
      this.state({ user: null });
    },
  };
}

render () {
    return (
        <authContext.Provider value={this.state}>
{this.props.children}
        </authContext.Provider>
    )
}