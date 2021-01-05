import logo from '../beasleydotcom.png';
import { Container, Card, CardHeader, CardMedia, CardContent, CardActions,
        Typography, Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import linkToProfileImage from '../beasleydotcom.png';
const style = {
    height: '30vh',
    width:'auto'
}
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        maxWidth: 40,
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


export default function Header(){
    return (
        <Container className="header">
            <Card>
                <CardMedia
                    style={style}
                    component="img"
                    alt=""
                    height="10%"
                    image={linkToProfileImage}
                    title="Profile Image"
                />
                <CardHeader title="Joshua Beasley" subheader="Software Development Engineer, Musician, Sales Professional"/>
                <CardContent>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="p">
                    Hi! I'm Joshua Beasley and I am so glad I've found an industry which prizes teamwork, creative problem solving, and retrospective/iterative planning because I think these are some of my biggest assets.
                    Driven by a desire to be helpful, I am an enthusiastic student of Software Development because I believe it is the realm in which I can do the most good for humanity and have the most fun.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing> 
                     {/* bottom of project card */}
                        <Button>
        
                            <IconButton area-label="Hyperlink to LinkedIn">
                                <LinkIcon/>
                            </IconButton>
                        </Button>

                </CardActions>
            </Card>
        </Container>
       
    
    )
}
