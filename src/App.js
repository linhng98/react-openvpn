import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'redux/'
import { verifyActions } from './actions/verify_user'
import { connect } from 'react-redux';

function App(props) {

  const [input, setInput] = useState();
  const verify = _ => {
    props.verify(input);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <img className="openvpn-logo mt-5 mb-5" src="/logo.png"></img>
          <div className="card shadow p-5">
            <div className="card-title">verify</div>
            <div className="input-form mb-4">
              <img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" className="icon mr-3"></img>
              <div className="input-container">
                <input className="input" placeholder="username" onChange={e => setInput(e.target.value)}></input>
              </div>
            </div>
            <button className="btn btn-primary btn-size" onClick={verify}>verify</button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    verify: state.verify
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verify: username => dispatch(verifyActions.verify(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
