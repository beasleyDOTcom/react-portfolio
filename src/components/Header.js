import {
    Container, Card, CardHeader, CardMedia, CardContent, CardActions,
    Typography, Button, IconButton, Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import linkToProfileImage from '../beasleydotcom.png';
import MtStHelens from '../MtStHelens.JPG';
import sullys from '../sullys.JPG';


const style = {
    height: 'auto',
    width: '32vw',
    borderRadius: '40%'
}
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    imageHolder:{
        display: 'flex',
        justifyContent: 'space-evenly',

    },
    header: {
        display: 'flex',
        padding: '10vw',
        paddingTop: '8vw',
        display: 'flex',
        flexDirection: 'row'
    },
    linkContainer:{
        display: 'flex',
        justifyContent: 'space-around',
    },
    media: {
        maxWidth: 40,
        height: 99,
        paddingTop: '56.25%', // 16:9  
        display: 'flex'     ,
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

export default function Header() {

    const classes = useStyles();
    return (
        <Container className={classes.header}>
            <Card elevation={24}>
                {/* <Avatar alt="Image of Beasleydotcom" src={linkToProfileImage} className={classes.avatar}/> */}
                <CardHeader title="Joshua Beasley" subheader="Full Stack Software Development Engineer, Musician, Sales Professional" />
                <div className={classes.imageHolder}>
                    <CardMedia
                        style={style}
                        component="img"
                        alt=""
                        height="10%"
                        image={linkToProfileImage}
                        title="Profile Image"
                    />
                                    <CardMedia
                        style={style}
                        component="img"
                        alt=""
                        height="10%"
                        image={sullys}
                        title="Profile Image"
                    />
                </div>
                <div className={classes.linkContainer}>
                    <CardActions className = {classes.hyperLinks}>
                        <Button href="https://linkedin.com/in/beasleydotcom">

                            <IconButton area-label="Hyperlink to LinkedIn">
                                <LinkedInIcon/>
                            </IconButton>
                        </Button>
                        <Button href="https://github.com/beasleydotcom">
                            <IconButton area-label="Hyperlink to GitHub">
                                <GitHubIcon/>
                            </IconButton>
                        </Button>

                    </CardActions>
                </div>
                
                <CardContent>
                    
                    <Typography gutterBottom variant="h6" component="p" justifyContent='center'>
                        Hi! I'm Joshua Beasley and I am so glad I've found an industry which prizes teamwork, creative problem solving, and retrospective/iterative planning because I think these are some of my biggest assets.
                        Driven by a desire to be helpful, I am an enthusiastic student of Software Development because I believe it is the intersection between which I can do the most good for humanity and have the most fun.
                    </Typography>
                </CardContent>

            </Card>
        </Container>


    )
}
