import React from 'react';
//Material-UI
import { Button, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
// import HUE from '@material-ui/core/colors/HUE';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green, red, teal } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//bootstrap
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import '../assets/Cooking.css';
import ribs2020 from '../assets/ribs2020.png';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: 20,
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
      backgroundColor: green[500],
    },
  }));

//   const useStyles2 = makeStyles((theme) => ({
//     palette: {
//         primary: {
//           main: A100['#a7ffeb'],
//         },
//         secondary: {
//           main: '#f44336',
//         },
//       },
//     }));

  

function Cooking() {
    const classes = useStyles();
    // const button = useStyles2()
    const [expanded, setExpanded] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    


    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

      const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
      };

    
        

    
    return (
        <>  
                <div className="sendRecipieBtn">
                    <IconButton variant="contained" color="Primary">
                        <Button 
                            onClick={()=> alert('clicked')} 
                            variant='contained' 
                            color="teal[500]"
                        >Click me to Share a Recipie
                        </Button>
                    </IconButton>
                </div>
        {/* Recipie Cards */}
            <div className="cooking__cards"> 
                
                
            {/* card 1 */}
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            A
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                        }
                        title="Freekeh Paella with Clams and Almond Aioli"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://assets.epicurious.com/photos/54b720082722874e516a1e10/6:4/w_620%2Ch_413/51260690_freekeh-paella_1x1.jpg"
                        title="Freekeh Paella with Clams and Almond Aioli"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton 
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 2 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            B
                        </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Ribs from a Master Chef"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image={ribs2020}
                        title="Ribs"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton 
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded1,
                        })}
                        onClick={handleExpandClick1}
                        aria-expanded={expanded1}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 3 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            C
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                        title="Pizza"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://assets.epicurious.com/photos/5cc724454e755d28c4ba3b51/16:9/w_2560%2Cc_limit/Green-Cholula-Hot-Sauce-HERO-04252019.jpg"
                        title="Pizza"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Pizza is my favorite food since I was a little kid. Now i'm a big kid and still love pizza all the same. Isn't that what adults are, just giant kids with a new presentation. Anyway I like to eat might pizza with ranch sometimes or simple parmesan cheese and chili flakes. How do you like your pizza?
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 4 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Soup"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.stuff.co.nz%2Fcontent%2Fdam%2Fimages%2F1%2Ft%2F6%2Fv%2Fh%2F8%2Fimage.related.StuffLandscapeSixteenByNine.710x400.1t6vcy.png%2F1545249564931.jpg&f=1&nofb=1"
                        title="Soup"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 5 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                        title="Frozen Custard (Cant forget the dessert)"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jamesbeard.org%2Fsites%2Fdefault%2Ffiles%2Fblog%2Fadditional%2Ffeature-frozen-custard-1-large.jpg&f=1&nofb=1"
                        title="Frozen Custard"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 6 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            K
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                        title="Korean BBQ (Feast Like King)"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2019%2F08%2FKorean-BBQ-with-full-side-dishes.jpg&f=1&nofb=1"                 
                        height="230px"
                        title="Korean BBQ"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 7 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                        title="Chicken & Dumplings"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fsoup-a-sundale-1812-p74.jpg%3Fitok%3DtV2N7Dnz&f=1&nofb=1"
                        title="Soup a Sundale"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This recipe comes courtesy best-selling author Ann Hood, whose book of stories and recipes, Kitchen Yarns: Notes on Life, Love, and Food, is out soon. For convenience, Hood sometimes makes the meatballs ahead of time, freezes them, and thaws them before adding to the soup. She likes to make her own chicken stock for even richer flavor: She puts the picked carcass bones of a roast chicken (or a picked rotisserie chicken) in a Dutch oven, covers it with water, then adds three carrots before simmering.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* card 8 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            P
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                        title="Peaking Duck (So Good!)"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HA7WFnpHEqHqQASb2MGJgAHaFj%26pid%3DApi&f=1"
                        title="Peaking Duck"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                            minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                            again without stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </>
    )
}

export default Cooking

//1 img: "https://assets.epicurious.com/photos/54b720082722874e516a1e10/6:4/w_620%2Ch_413/51260690_freekeh-paella_1x1.jpg" freekeh paella

//2 img : https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2019%2F08%2FKorean-BBQ-with-full-side-dishes.jpg&f=1&nofb=1"                 height="230px Korean BBQ

//2 img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jamesbeard.org%2Fsites%2Fdefault%2Ffiles%2Fblog%2Fadditional%2Ffeature-frozen-custard-1-large.jpg&f=1&nofb=1 frozen custard

// 3 img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1dIii6njyPnwMNH69nxu3QHaFX%26pid%3DApi&f=1" height='230px

//4 img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wBB7go1zyd0VDHySjLrlHwHaEK%26pid%3DApi&f=1" height="230px"

//5 img: https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F20x49.shreveport-bossier.org%2Fwp-content%2Fuploads%2F2017%2F05%2Fmolcajete.jpg&f=1&nofb=1 
//molcajete

//6 img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fsoup-a-sundale-1812-p74.jpg%3Fitok%3DtV2N7Dnz&f=1&nofb=1 
//soup-a-sundale

//7 img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.stuff.co.nz%2Fcontent%2Fdam%2Fimages%2F1%2Ft%2F6%2Fv%2Fh%2F8%2Fimage.related.StuffLandscapeSixteenByNine.710x400.1t6vcy.png%2F1545249564931.jpg&f=1&nofb=1" height="255px" soup



// import { Link } from 'react-router-dom'
// import Button from '@material-ui/core/Button';

// <Button component={Link} to="/open-collective">
//   Link
// </Button>
        // <div className="cooking">
        //     <div className="cooking__Header">
        //         <IconButton>
        //             <MenuIcon/>
        //         </IconButton>
        //         <h1>Good Home Cooking</h1>
        //             <span>
        //                 <Input/>
        //                 <SearchIcon/>
        //             </span>
        //     </div>

        //     <div className="cooking__bodyRow1">
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jamesbeard.org%2Fsites%2Fdefault%2Ffiles%2Fblog%2Fadditional%2Ffeature-frozen-custard-1-large.jpg&f=1&nofb=1"
        //                 height="230px" 
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1dIii6njyPnwMNH69nxu3QHaFX%26pid%3DApi&f=1" 
        //                 height='230px'
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wBB7go1zyd0VDHySjLrlHwHaEK%26pid%3DApi&f=1" 
        //                 height="230px"
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //     </div>
            
        //     <div className="cooking__bodyRow2">
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdelishar.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fratatouille-1-1080x720.jpg&f=1&nofb=1"
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //           img 5 src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F20x49.shreveport-bossier.org%2Fwp-content%2Fuploads%2F2017%2F05%2Fmolcajete.jpg&f=1&nofb=1"
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd36tnp772eyphs.cloudfront.net%2Fblogs%2F1%2F2019%2F08%2FKorean-BBQ-with-full-side-dishes.jpg&f=1&nofb=1"
        //                 height="230px" Korean BBQ
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //     </div> 
        //     <div className="cooking__bodyRow3">
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fsoup-a-sundale-1812-p74.jpg%3Fitok%3DtV2N7Dnz&f=1&nofb=1" Soup a sundale
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.stuff.co.nz%2Fcontent%2Fdam%2Fimages%2F1%2Ft%2F6%2Fv%2Fh%2F8%2Fimage.related.StuffLandscapeSixteenByNine.710x400.1t6vcy.png%2F1545249564931.jpg&f=1&nofb=1" soup
        //                 height="255px"
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img 
        //                 variant="top" 
        //                 src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HA7WFnpHEqHqQASb2MGJgAHaFj%26pid%3DApi&f=1" peaking duck
        //             />
        //             <Card.Body>
        //                 <Card.Title>Card Title</Card.Title>
        //                 <Card.Text>
        //                 Some quick example text to build on the card title and make up the bulk of
        //                 the card's content.
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //     </div>

        // </div> 