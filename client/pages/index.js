import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';
import initialState from '../store';
import BodyWrapper from '../components/BodyWrapper';
import Shortener from '../components/Shortener';
import Table from '../components/Table';
import NeedToLogin from '../components/NeedToLogin';
import { authUser, getUrlsList } from '../actions';

class Homepage extends Component {
  static getInitialProps({ req, store }) {
    const token = req && req.cookies && req.cookies.token;
    if (token && store) store.dispatch(authUser(token));
  }

  componentDidMount() {
    if (this.props.isAuthenticated) this.props.getUrlsList();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.isAuthenticated !== nextProps.isAuthenticated;
  }

  render() {
    const { isAuthenticated } = this.props;
    const needToLogin = !isAuthenticated && <NeedToLogin />;
    const table = isAuthenticated && <Table />;
    return (
      <BodyWrapper>
        <Shortener />
        {needToLogin}
        {table}
      </BodyWrapper>
    );
  }
}

Homepage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getUrlsList: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

const mapDispatchToProps = dispatch => ({
  getUrlsList: bindActionCreators(getUrlsList, dispatch),
});

export default withRedux(initialState, mapStateToProps, mapDispatchToProps)(Homepage);
