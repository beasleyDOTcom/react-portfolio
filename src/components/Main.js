import '../App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { CardHeader, CardMedia, CardContent, CardActions, Card, Container } from '@material-ui/core';
import { Collapse, IconButton, Typography, Paper, Button }from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from '@material-ui/icons/MoreVert';
// attach email, and launch or link? 
import cli from '../asyncAndTheAwaits.png';
import hotBotz from '../HotBotz.png';
import comicCat from '../ComicCat.png';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-Around',
    },
    bio: {
        maxWidth:700
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function Main(){

    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles();
    const handleExpandClick = () => setExpanded(!expanded);

    return (
    
 
        <Container className={classes.container} alt="list of projects">
            <Card className={classes.root} key={Math.random()} elevation={24} height="100%">
                <CardHeader title="Command Love Interface" subheader="September 2020"/>
                {/* actions for center of card and picture of project */}
                    <CardMedia
                        component="img"
                        alt=""
                        height="300px"
                        image={cli}
                        title="Command Love Interface"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        A terminal based dating application that allows users to find love via the command line.
                        </Typography>
                    </CardContent>
                <CardActions disableSpacing> 
                    {/* bottom of project card */}
                    <Button href="http://command-love-interface.herokuapp.com">
                        <IconButton area-label="visit">
                            <LinkIcon/>
                        </IconButton>
                    </Button>
                    <Button href="http://github.com/Async-and-the-Awaits/">
        
                        <IconButton>
                            <GitHubIcon/>
                        </IconButton>
                    </Button>
                    <Button
                        className={clsx(classes.expand, {
                        [classes.expand]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                    >
                        Show More
                    <IconButton 
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>  
                    </Button>
                    
                </CardActions>
                {/* this is the section that handles what is shown to the user when they click the "expand" icon */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="h6">
                        Technologies/Tools Used:
                    </Typography>
                    <Typography paragraph>
Socket.io, JavaScript, AtlassDB, Oauth, Bcrypt, Inquirer, Figlet,
Mongoose, Chalk, Jest, Node.js, and Jest.
                    </Typography>
                </Collapse>
            </Card>
{/* ----------------------------------------------------------------------------------------------------- */}
<Card className={classes.root} key={Math.random()} elevation={24} height="100%">
                <CardHeader title="What's Cook'n" subheader="October 2020"/>
                {/* actions for center of card and picture of project */}
                    <CardMedia
                        component="img"
                        alt="screen shot of what's cook'n"
                        height="300px"
                        image={hotBotz}
                        title="What's Cook'n"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        A full-stack mobile first social media platform that allows users to share and discover recipes.
                        </Typography>
                    </CardContent>
                <CardActions disableSpacing> 
                    {/* bottom of project card */}
                    <Button href="http://whatscookin-4fd17.web.app/">

                        <IconButton area-label="visit what's cook'n">
                            <LinkIcon/>
                        </IconButton>
                    </Button>
                    <Button href="http://github.com/hot-bots/final-project">
        
                        <IconButton>
                            <GitHubIcon/>
                        </IconButton>
                    </Button>
                    <Button
                        className={clsx(classes.expand, {
                        [classes.expand]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                    >
                        Show More
                    <IconButton 
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>  
                    </Button>
                    
                </CardActions>
                {/* this is the section that handles what is shown to the user when they click the "expand" icon */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="h6">
                        Technologies/Tools Used:
                    </Typography>
                    <Typography paragraph>
                    React.js, Redux.js, SQLite, Prisma, Node.js, Heroku, FireBase, Material
UI, Axios, Lodash, and Jest.
                    </Typography>
                </Collapse>
            </Card>
{/* -------------------------------------------*/}
<Card className={classes.root} key={Math.random()} elevation={24} height="100%">
                <CardHeader title="Comic Cat App" subheader="July 2020"/>
                {/* actions for center of card and picture of project */}
                    <CardMedia
                        component="img"
                        alt="Screen shot of Comic Cat App"
                        height="300px"
                        image={comicCat}
                        title="Comic Cat App"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        This web app allows the user to search for the title of a Marvel comic and save it to the favorites
page, where the user can “roll” for a new cat                       
                `       </Typography>
                    </CardContent>
                <CardActions disableSpacing> 
                    {/* bottom of project card */}
                    <Button href="http://comic-cat-beasleydotcom.herokuapp.com/">

                        <IconButton area-label="visit">
                            <LinkIcon/>
                        </IconButton>
                    </Button>
                    <Button href="http://github.com/Team-POST/comiccat">
        
                        <IconButton>
                            <GitHubIcon/>
                        </IconButton>
                    </Button>
                    <Button
                        className={clsx(classes.expand, {
                        [classes.expand]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                    >
                        Show More
                    <IconButton 
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>  
                    </Button>
                    
                </CardActions>
                {/* this is the section that handles what is shown to the user when they click the "expand" icon */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="h6">
                        Technologies/Tools Used:
                    </Typography>
                    <Typography paragraph>
                    Javascript, jQuery, HTML5, CSS3, postgresQL, md5, Node.js, ejs,
Express, Method-Override, Superagent, pg, dotenv, git, Github, and Jest.
                    </Typography>
                </Collapse>
            </Card>
        
        
        </Container>
    )
}