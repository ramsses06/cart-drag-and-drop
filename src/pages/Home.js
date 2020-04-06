import React from 'react';
import { connect } from 'react-redux';
import * as reduxActions from '../actions/reduxActions';

class Home extends React.Component {
  render () {
    console.log('Home -> this', this);
    console.log('Home -> reduxReducer', this.props.reduxReducer);
    return (
      <div>
        Home {this.props.reduxReducer.status ? 'verdadero' : 'falso'}{' '}
        <button onClick={() => this.props.getType()}>action</button>
      </div>
    );
  }
}

const mapStateToProps = ({ reduxReducer }) => {
  return {
    reduxReducer
  };
};

const mapDispatchToProps = {
  ...reduxActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
