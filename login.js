import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop:'20px',
    marginLeft:'30px',  
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginBox: {
    float: 'right',
    marginRight: '100px',
    marginTop: '200px',
    borderRadius: '10px',
  },
  heading:{
    
    float:'left',
    marginTop:'20px',
    marginLeft:'30px',
  },
  footer:{

    paddingLeft:'100px'
      
  },
  title:{
      paddingTop:'30px',
      fontSize:'20px'
  },
  forgot:{
    paddingTop:'12px',
      float:'right'
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={12} md={12} className={classes.image}>
        <Grid item xs={12} sm={4} md={3} component={Paper} elevation={6} className={classes.loginBox} >
             <Grid container>
                <Grid item>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />  
                    </Avatar>
                </Grid> 
                <Grid item className={classes.title}>
                        Todo
                </Grid>
            </Grid>
           
            <Typography className={classes.heading} component="h1" variant="h5">
                Log in
            </Typography>
            <div className={classes.paper}>
            
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
            
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container spacing={4}>
                <Grid item xs>   
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me logged in"
                />
                </Grid>
                <Grid item xs>
                    <Link href="#" variant="body2" className={classes.forgot}>
                    {"Forgot password?"}
                    </Link>
                </Grid>

                </Grid>
                <Grid container spacing={10}>
                <Grid item>
                     
                    <Link href="#" variant="body2" className={classes.footer}>
                        Don't have an account? Sign Up
                    </Link>
                </Grid>    
                
               
                </Grid>
              
            </form>
            </div>
        </Grid>
      </Grid>  
    </Grid>
  );
}

//export default Login;