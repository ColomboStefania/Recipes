import React from 'react'
import AppBar from 'material-ui/AppBar'
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {withRouter} from 'react-router'
import compose from 'recompose/compose';
import {userId} from '../../jwt'
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';


import AccountIcon from 'material-ui-icons/AccountBox'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M11 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const TopBar = (props) => {
  const { location, history, user, classes } = props

  return (
    <AppBar position="absolute" style={{zIndex:10}}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}}>   Reciper  
        </Typography>
        {
          user &&
          <Button color="inherit"><AccountIcon /> { user.firstName }</Button>
        }

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign up</Button>
        }
        
        {
          /games$/.test(location.pathname) &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
                <Button>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
            <HomeIcon className={classes.icon} />
          </Link>
        </Button>

      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withRouter(
//   connect(mapStateToProps)(TopBar)
// )

export default withRouter(compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    {  },
  ),
)(TopBar));