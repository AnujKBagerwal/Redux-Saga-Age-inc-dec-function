import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
  return (
    <div className="App" style={{ marginTop: '15%' }}>
      <h2>Age:{props.age}</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type="button"
          onClick={props.onAgeUp}
          style={{ margin: '10px', width: '100px', height: '40px' }}
        >
          Age UP
        </button>
        <button
          type="button"
          onClick={props.onAgeDown}
          style={{ margin: '10px', width: '100px', height: '40px' }}
        >
          Age Down
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', payload: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', payload: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
