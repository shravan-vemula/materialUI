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
    textTransform:'capitalize',
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

    paddingLeft:'100px',
    paddingTop:'10px',
      
  },
  title:{
      paddingTop:'30px',
      fontSize:'20px'
  },
  forgot:{
    paddingTop:'12px',
      float:'right'
  },
  label:{
    fontSize:'10px',

  },
  styleTwo:{
    border: '0',
    height: '0',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',

  },
  mail:{
      paddingLeft: '40px',
      marginTop:'30px',
  }
  


}));

export default function Signup2() {
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
            <Typography className={classes.mail} component="p" variant="caption">
                {"< vishwas@gmail.com"}
            </Typography>
            <Typography className={classes.heading} component="h1" variant="h5">
                Almost there
            </Typography>
            <div className={classes.paper}>
            
            <form className={classes.form} noValidate>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Your name"
                name="name"
                autoComplete="name"
                autoFocus
                />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Typography component="p" color="textSecondary" variant="caption">
                Your password must be atleast 8 characters long
                </Typography>


                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign up
                </Button>

                <Grid item xs>   
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<span style={{ fontSize:'15px'}}>{"Keep me logged in"}</span>}
                
                />
                </Grid>

                <Grid item xs>   
                <FormControlLabel
                control={<Checkbox value="terms" color="primary" />}
                label={<span 
                    style={{ fontSize:'15px'}}>
                    Agree to our
                    <Link href="#" variant="body2"> {"Terms of Service"} </Link>
                    and 
                    <Link href="#" variant="body2"> {"Privacy Policy"} </Link>
                    </span>}
                
                />
                </Grid>
                <hr className={classes.styleTwo}></hr>
                <Grid container spacing={10} className={classes.footer}>
                <Grid item>  
                    <span>{"Already signed up? "} 
                    <Link href="#" variant="body2" >
                    Go to login
                    </Link>
                    </span>
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