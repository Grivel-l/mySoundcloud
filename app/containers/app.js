import {connect} from 'react-redux';

import App from '../components/App';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
});

const app = connect(mapStateToProps, mapDispatchToProps)(App);

export default app;
