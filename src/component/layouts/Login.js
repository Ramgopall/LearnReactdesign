import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#efefef',
    },
    gridContainer: {
        display: "grid",
        placeItems: "center"
    },
    paper: {
        padding: theme.spacing(2),
        borderRadius: 8,
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    titleDesign: {
        color: "#0bb0bd",
        marginTop: 8,
        marginBottom: 8
    },
    lableDesign: {
        '&.Mui-focused': {
            color: "#0bb0bd"
        },
    },
    textField: {
        width: '90%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: '#0bb0bd',
        },
        margin: 16
    },
    button: {
        width: '90%',
        margin: 16,
        background: 'linear-gradient(45deg, #46c5cf 30%, #0bb0bd 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 34,
        padding: '0 30px',
    },
    avtarSize: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const Form = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push('/home')
    }

    return (
        <Box className={classes.root}>
            <Grid
                container
                spacing={16}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}>
                <Grid container class={classes.gridContainer}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <form onSubmit={handleSubmit}>
                                <Box direction="column" justifyContent="center">
                                    <Box direction="row" justifyContent="center" display="flex">
                                        <Avatar
                                            src='https://cdn3.iconfinder.com/data/icons/gradient-circle/36/2018-512.png'
                                            className={classes.avtarSize}
                                        />
                                    </Box>
                                    <Typography className={classes.titleDesign}>
                                        Login to your panel
                                    </Typography>
                                    <TextField
                                        className={classes.textField}
                                        margin="dense"
                                        variant="outlined"
                                        label="Email"
                                        type="email"
                                        value={email}
                                        InputLabelProps={{
                                            className: classes.lableDesign,
                                        }}
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                    />
                                    <TextField
                                        className={classes.textField}
                                        margin="dense"
                                        variant="outlined"
                                        label="Password"
                                        type="password"
                                        value={password}
                                        InputLabelProps={{
                                            className: classes.lableDesign,
                                        }}
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                    <Button
                                        className={classes.button}
                                        onClick={(e) => handleSubmit(e)}
                                    >Login</Button>
                                </Box>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>

        </Box>
    );
};

export default Form;
