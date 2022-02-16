import {
  AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid,
  IconButton, Paper, Toolbar, Typography, Dialog, DialogTitle, TextField, DialogActions,
  DialogContent, DialogContentText
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

import LayersIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// import TextField from '@material-ui/core/TextField';
// import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeturedPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    bacgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeturedPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(3)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGreed: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const classes = useStyles();
  const [value, setValue] = useState("recents")

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <AppBar fixed>
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >Material UI Blog</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen} >Log in</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see vidios</DialogContentText>
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Log in</Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>


            </Box>
            <Button color="secondary" variant="contained">Sign up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeturedPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }} >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={4}>
                <div className={classes.mainFeturedPostContent} >
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom  >
                    MUI Blog
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum enim tortor, accumsan et rutrum et,
                    consectetur non orci. Sed facilisis turpis id leo convallis, in.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>

        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              MUI Blog
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum enim tortor, accumsan et rutrum et,
              consectetur non orci. Sed facilisis turpis id leo convallis, in.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum enim tortor, accumsan et rutrum et,
              consectetur non orci. Sed facilisis turpis id leo convallis, in.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                  <Button variant="contained" color="primary">Start Now</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Learn more</Button>
                </Grid>
              </Grid>
            </div>
            <Container className={classes.cardGreed} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map(card =>
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                          Blog Post
                        </Typography>
                        <Typography>
                          Blog Post with Material UI and React. Blog Post with Material UI and React.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <LayersIcon />
                        <PlayCircleFilledIcon />
                      </CardActions>
                    </Card>
                  </Grid>)}
              </Grid>
            </Container>
          </Container>
        </div>
      </main>

      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
          React blog with Material UI
        </Typography>
      </footer>

    </>
  );

}

export default App;
