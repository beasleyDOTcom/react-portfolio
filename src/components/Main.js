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
import cli from '../beasleydotcom.png';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
    
 
        <Container className="projects" alt="list of projects">
            <Card className={classes.root}>
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
                            Command Love Interface is a dating application for developers based on the command line.
                        </Typography>
                    </CardContent>
                <CardActions disableSpacing> 
                    {/* bottom of project card */}
                    <Button>

                        <IconButton area-label="visit">
                            <LinkIcon/>
                        </IconButton>
                    </Button>
                    <Button href="https://github.com/beasleydotcom">
        
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
                        list out the different technologies / tools used to produce this web application
                    </Typography>
                </Collapse>
            </Card>
        </Container>


        // <div className="body">
        //     <h2>Professional Portfolio of Joshua Beasley</h2>
        //     <summary>I am so glad I've found an industry which prizes teamwork, creative problem solving, and retrospective/iterative planning because I think these are some of my biggest assets.
        //     Driven by a desire to be helpful, I am an enthusiastic student of Software Development because I believe it is the realm in which I can do the most good for humanity and have the most fun.
        //     </summary>
        //     <section className="projects">
        //         <div>
        //             <h2>Command Love Interface</h2>
        //         </div>
        //         <div>
        //             <h2>What's Cookin'</h2>
        //         </div>
        //         <div>
        //             <h2>Comic Cat App</h2>
        //         </div>
        //     </section>
        //     <section className="inProgress">
        //         <div>
        //             <h2>Be Your Shape</h2>
        //         </div>
        //         <div>
        //             <h2>Report Spam</h2>
        //         </div>
        //         <div>
        //             <h2>Band Website</h2>
        //         </div>
        //     </section>
        // </div>
    )
}