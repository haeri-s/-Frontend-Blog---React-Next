import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    }
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden'
  }
}));

function Error({ route }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}

Error.propTypes = {
  route: PropTypes.object
};

export default Error;
