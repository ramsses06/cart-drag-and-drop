import React from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';
import { Spinner, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './css/Home.css';
import HeaderLayout from '../layouts/HeaderLayout';

const COLstyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 0'
};

class Home extends React.Component {

  async componentDidMount () {
    if (!this.props.profileReducer.profile) {
      this.props.getProfile();
    }
  }

  render () {
    console.log('Home -> props', this.props);
    const { profile } = this.props.profileReducer;
    if (!profile) {
      return (
        <HeaderLayout>
          <Spinner animation='border' />
        </HeaderLayout>
      );
    } else {
      return (
        <HeaderLayout>
          <Row>
            <Col as='div' style={COLstyles}>
              <img className='profile-image' src='https://i.picsum.photos/id/237/200/200.jpg' alt='' />
            </Col>
          </Row>
          <Row>
            <Col style={COLstyles}>
              <p>Bienvenido: {profile.welcome}</p>
            </Col>
          </Row>
          <Row>
            <Col style={COLstyles}>
              <Button>
                <NavLink className='brand-link' to={{ pathname: '/products' }}>
                  Iniciar
                </NavLink>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={COLstyles}>
              <p>Version: {profile.version}</p>
            </Col>
          </Row>
        </HeaderLayout>
      );
    }
  }
}

const mapStateToProps = ({ profileReducer }) => {
  return {
    profileReducer
  };
};

const mapDispatchToProps = {
  ...profileActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
