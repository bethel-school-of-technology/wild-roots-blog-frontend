import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Material-UI
import { Button, IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, withStyles, createMuiTheme} from '@material-ui/core/styles';
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
import { green, teal } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//bootstrap
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import ribs2020 from '../assets/ribs2020.png';
import '../assets/Cooking.css';
import Recipie from './Recipie';



export const useStyles = makeStyles((theme) => ({
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
    button: {
        backgroundColor: teal.A200,
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
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [expanded6, setExpanded6] = React.useState(false);
    const [expanded7, setExpanded7] = React.useState(false);
    
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
    };

    const handleExpandClick3 = () => {
        setExpanded3(!expanded3);
    };

    const handleExpandClick4 = () => {
        setExpanded4(!expanded4);
    };

    const handleExpandClick5 = () => {
        setExpanded5(!expanded5);
    };

    const handleExpandClick6 = () => {
        setExpanded6(!expanded6);
    };

    const handleExpandClick7 = () => {
        setExpanded7(!expanded7);
    };
    

    return (
        <>  
            <div className="sendRecipieBtn">
                <Link to='/recipies'>
                    <Button 
                        className={classes.button}
                        variant='outlined' 
                    >Click me to Share a Recipie
                    </Button>
                </Link>
            </div>
        {/* Recipie Cards */}
            <div className="cooking__cards"> 
            {/* ///////card 1 */}
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
            {/* ///////card 2 */}
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
                        <Typography paragraph>Ingredients:</Typography>
                        <Typography paragraph>
                            &#8226; 5 lbs Pork Ribs &#8226; 1.5 tbsp Worcestershire Sauce &#8226; 1 tsp Garlic Powder &#8226; 1 tsp Paprika Powder &#8226; 1 tsp Onion Powder &#8226; 1 tsp Black Pepper &#8226; 1 tsp Cayenne Pepper Powder &#8226; 1 tsp Italian Seasoning &#8226; 1 tsp Salt &#8226; 1 tsp Cumin Powder &#8226; 1 tsp Cinnamon Powder &#8226; 1.5 tbsp Bread Crumbs
                        </Typography>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Step 1: In a small mixing bowl garlic powder, paprika powder, onion powder, Cayenne Pepper Powder, Italian spices, salt, Cumin Powder, cinnamon powder, bread crumbs, and brown sugar. then mix well.
                        </Typography>
                        <Typography paragraph>
                            Step 2: Apply Worcestershire sauce evenly on the pork ribs.
                        </Typography>
                        <Typography paragraph>
                            Step 3: Rub the powder mixture from Step 1 onto the pork ribs. Make sure to distribute the powder evenly onto the meat.
                        </Typography>
                        <Typography paragraph>
                            Step 4: Bake the pork ribs in an oven at 180degC/350degF for 2.5h to 3h. then take the ribs out of the oven.
                        </Typography>
                        <Typography paragraph>
                            Step 5: Mix honey and BBQ sauce together in a bowl and spread it onto the baked pork ribs evenly.
                        </Typography>
                        <Typography paragraph>
                            Step 6: Put the ribs back in the oven and bake again for 10mins.
                        </Typography>
                        <Typography paragraph>
                            Step 7: Enjoy the ribs with whatever drink you prefer. It is definitely a good choice for a Barbecue party.
                        </Typography>
                        <Typography paragraph>
                            Reminder: You can adjust the salt and spice levels according to your own preference and taste. When baking the pork ribs in the oven, please wrap the pork ribs tightly in the foil, otherwise, too much of the water and the juice from the meat will evaporate, leaving the meat dry.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 3 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            S
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
                        Pizza is my favorite food since I was a little kid. Now i'm a big kid and still love pizza all the same. Isn't that what adults are, just giant kids with a new presentation display to the world. Anyway I like to eat my pizza with ranch sometimes or simple parmesan cheese and chili flakes. How do you like your pizza? Below is the dough, once you have the dough down the sky is the limit on how you want to make it. 
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
                            [classes.expandOpen]: expanded2,
                        })}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            Ingredients: &#8226; 1 3 / 4 cup unbleached flour, plus extra if you knead the dough
                            &#8226; 3 / 4 cup of warm water, 105 to 115 degrees
                            &#8226; 1 packet of Fleischmann's active dry yeast
                            &#8226; 1 teaspoon sugar
                            &#8226; 1 teaspoon kosher salt
                            &#8226; 1 tablespoon light olive oil (you can substitute any oil)
                            &#8226; Cornmeal (optional) for the baking of pizzas
                        </Typography>
                        <Typography paragraph>
                            Method: Measure 1 3 / 4 cup flour and 1 teaspoon kosher salt in a large mixing bowl, set aside. Measure 3 / 4 cup hot water in a Pyrex measuring cup. Insert a thermometer, and when the temperature drops to between 105 degrees and 115 degrees, sprinkle the package dry yeast in. Add 1 teaspoon sugar and 1 tablespoon oil. Stir with a fork just to blend. Leave for 5 minutes until the yeast is foamy on the surface of the water. Pour the water, yeast, oil and sugar mixture into the bowl with flour and salt. Gently fold the liquid into the dry ingredients with a rubber spatula. If it fully, dump the dough on a floured board, counter, or a table. Knead for about 7-10 minutes, a little flour to the Board if the dough begins to hold, or if your dough is too wet. You know, you can kneading, if you press your finger easily into the dough and the indentation disappears. Another indication that you have the dough is kneaded enough, if you notice that the dough is harder to knead it too much elastic. Place the dough in a large, clean bowl, lightly with the oil quantity. Cover the bowl with plastic wrap. Put it in a warm place in your kitchen. Let it twice as big, which is in about an hour to an hour and a half. If your kitchen is not warm enough, it may take about 2 hours for the dough in the size to double. Then dump the dough on a floured board. Turn it once on the board with flour, then pat it to deflate it. Cut the dough into 2 equal parts. Wrap individually in plastic wrap and stored in a Ziploc bag. Refrigerator the dough until you're ready to make your pizza. You can use the dough to a day after it.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 4 */}
                <Card className={classes.root}> 
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            I
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Red Posole with Beef"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fresources.stuff.co.nz%2Fcontent%2Fdam%2Fimages%2F1%2Ft%2F6%2Fv%2Fh%2F8%2Fimage.related.StuffLandscapeSixteenByNine.710x400.1t6vcy.png%2F1545249564931.jpg&f=1&nofb=1"
                        title="Red Posole with Beef"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Posole is awesome and a feel good meal for the soul. But if you eat it with pork like traditionally well you'll feel super sluggish after wards. But with beef that's just not the case, for me anyway. Enjoy this recipie and enjoy with your family. Make sure to make it your own becasue creativity and customization designed by you and your families ideas make it a meal you'll never forget and always enjoy together. 
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
                            [classes.expandOpen]: expanded3,
                        })}
                        onClick={handleExpandClick3}
                        aria-expanded={expanded3}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded3} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            <strong>Ingredients:</strong> 
                            &#8226; 3 pounds pork shoulder (Boston butt)
                            &#8226; 1 large white onion, halved through root end, plus chopped for serving
                            &#8226; 2 heads of garlic, halved crosswise
                            &#8226; 1 bay leaf
                            &#8226; 3 whole cloves
                            &#8226; 10 guajillo chiles, ribs and seeds removed
                            &#8226; 6 dried chiles de árbol, ribs and seeds removed
                            &#8226; Kosher salt
                            &#8226; 3 (15-ounce) cans white hominy, rinsed
                            &#8226; Thinly sliced cabbage, thinly sliced radishes, dried oregano, and lime wedges (for serving)
                        </Typography>
                        <Typography paragraph>
                            1. <strong>Method:</strong> Place pork shoulder, onion halves, garlic, bay leaf, and cloves in a large pot. Pour in 14 cups water (pork should be submerged). Bring to a simmer and cook, skimming as needed and turning pork occasionally, until meat is cooked through and tender but not yet falling apart, 2 1/2–3 hours. Transfer pork to a plate; let cool slightly. Strain broth into a large bowl, then transfer back to pot. Slice pork into 1/2" slices and add to broth.
                            Do Ahead
                        </Typography>
                        <Typography paragraph>
                            2. Meanwhile, preheat oven to 350°F. Toast all the chiles on a rimmed baking sheet until brown (do not char) and starting to lightly puff in places, about 5 minutes. Bring 3 cups water to a boil in a medium saucepan; add chiles. Remove from heat and let chiles soak until softened, 10–12 minutes. Blend chiles and cooking liquid in a blender until smooth; season with salt.
                        </Typography>
                        <Typography paragraph>
                            3. Add chile purée to pork and broth. Bring to a simmer, add hominy, and cook, skimming off fat from surface, until pork is so tender it’s nearly falling apart, 45–60 minutes; season with more salt.
                        </Typography>
                        <Typography paragraph>
                            4. Divide posole among bowls, top with onion, cabbage, radishes, and oregano. Serve with lime wedges.
                        </Typography>
                        <Typography paragraph>
                            5. Posole can be made 3 days ahead. Let cool; cover and chill.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 5 */}
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
                            Frozen custard for me is the best type of ice cream. Rich and creamy and thick and and and! Add chocolate sticks to them, add whatever you'd like or just plain, either way you going to have a great moment in time. 
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
                            [classes.expandOpen]: expanded4,
                        })}
                        onClick={handleExpandClick4}
                        aria-expanded={expanded4}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded4} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <strong>Ingredients:</strong><br/>
                                &#8226; 1 vanilla bean
                                &#8226; 1 1/2 cups half-and-half 
                                &#8226; 1 cup granulated sugar 
                                &#8226; 5 large egg yolks 
                                &#8226; 1 1/2 cups heavy cream 
                            </Typography>
                            <Typography paragraph>
                                <strong>Meathod:</strong><br/>
                                1. Using a paring knife, split the vanilla bean in half. Use the back of the knife to gently scrape the caviar out of the bean and into a large saucepan. Add the vanilla bean, half-and-half and sugar and heat over low heat, stirring occasionally, until the sugar has completely dissolved. Remove from the heat and set aside.
                            </Typography>
                            <Typography paragraph>
                                2. Whisk the egg yolks in a mixing bowl until pale yellow and slightly thick, 2 to 3 minutes. Temper the yolks by slowly drizzling a ladle of the hot half-and-half mixture into the bowl, whisking the whole time. Repeat with a second ladle of the hot half-and-half mixture, again whisking the whole time.
                            </Typography>
                            <Typography paragraph>
                                3. Pour the tempered yolks back into the saucepan with the remaining half-and-half mixture and cook over low heat, stirring gently with a wooden spoon, until it's thick enough to coat the back of the spoon, 3 to 4 minutes.
                            </Typography>
                            <Typography paragraph>
                                4. Set a fine-mesh strainer over a clean bowl. Pour the custard through the strainer into the bowl. Add the heavy cream to the strained mixture and stir everything together. Refrigerate until chilled, about 2 hours.
                            </Typography>
                            <Typography paragraph>
                                5. Pour the chilled mix into an ice cream maker and freeze according to the manufacturer's directions. Transfer to a freezer-safe container and place in the freezer until frozen firm, at least 6 hours (but overnight is best for nice scoopable ice cream). Serve on its own or with warm apple crisp.
                            </Typography> 
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 6 */}
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
                            If there's one thing you need to eat out with your friends at least once, it has to be Korean BBQ! Everyone gathers together around the able and cooks there food and everyone is helping themselves and the sides keep coming and its like an event. Just trust me and you can experience it for yourself add to the desicription later to help me out. 
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
                            [classes.expandOpen]: expanded5,
                        })}
                        onClick={handleExpandClick5}
                        aria-expanded={expanded5}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded5} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <strong>Ingredients</strong><br/>
                                4 SERVINGS
                                &#8226; ¼ pear, grated
                                &#8226; 1 garlic clove, grated
                                &#8226; 2 tablespoons soy sauce
                                &#8226; 1 tablespoon gochugaru (coarse Korean hot pepper flakes), or 1 teaspoon crushed red pepper flakes
                                &#8226; 1 tablespoon grated peeled ginger
                                &#8226; 1 tablespoon light brown sugar
                                &#8226; 1 tablespoon toasted sesame oil
                                &#8226; 1 pound boneless pork loin, trimmed hanger steak, boneless short rib, or skinless, boneless chicken breasts or thighs
                                &#8226; 2 tablespoons vegetable oil, divided
                                &#8226; Kosher salt
                                &#8226; Sliced scallions (for serving)
                            </Typography>
                            <Typography paragraph>
                                <strong>Method:</strong><br/>
                                1.Combine pear, garlic, soy sauce, gochugaru, ginger, sugar, and sesame oil in a large resealable plastic bag or medium bowl. Using a sharp knife, slice meat into very thin strips. Add to marinade, seal bag, and squish everything around until the meat is coated. Let sit at room temperature 30 minutes, or chill up to 8 hours.
                            </Typography>
                            <Typography paragraph>
                                2. Heat 1 Tbsp. vegetable oil in a large skillet over medium-high until oil is shimmering. Remove half of meat from marinade, letting excess drip back into bag; season lightly with salt and cook in a single layer without moving until lightly browned, about 1 minute. Toss meat and continue to cook, tossing occasionally, until cooked through and crisp at edges, about 3 minutes. Transfer to a plate. Repeat with remaining 1 Tbsp. vegetable oil, remaining meat, and more salt.
                            </Typography>
                            <Typography paragraph>
                                3. Serve topped with scallions.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 7 */}
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
                        title="Soup a Sundale"
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
                            [classes.expandOpen]: expanded6,
                        })}
                        onClick={handleExpandClick6}
                        aria-expanded={expanded6}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded6} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                            <strong>Ingredents:</strong><br/>
                            &#8226; 1 1/2 pounds ground turkey 
                            &#8226; 1 cup plain breadcrumbs 
                            &#8226; 3 large eggs 
                            &#8226; 2 tablespoons chopped fresh flat-leaf parsley 
                            &#8226; 3 garlic cloves, crushed and minced 
                            &#8226; 1 teaspoon kosher salt, divided 
                            &#8226; 1 teaspoon freshly ground black pepper, divided 
                            &#8226; 1/2 cup canola oil, divided 
                            &#8226; 2 qt. unsalted chicken stock (such as Swanson) 
                            &#8226; 2 1/2 pounds escarole, trimmed and chopped 
                            &#8226; 1 1/2 cups shredded rotisserie chicken 
                            &#8226; 6 hard-cooked eggs, peeled and quartered lengthwise
                        </Typography>
                        <Typography paragraph>
                            <strong>Method:</strong><br/>
                            1. Combine turkey, breadcrumbs, eggs, parsley, and garlic in a large bowl. Add 1/2 teaspoon salt and 1/2 teaspoon pepper; mix gently with your hands until mixture doesn’t stick to your hands and ingredients are well blended. Place a half-dollar-size portion of turkey mixture in your palm; roll with both hands until you form a firm, bite-size ball. Repeat procedure to make about 40 meatballs.
                        </Typography>
                        <Typography paragraph>
                            2. Heat a large nonstick skillet over medium-high; add 2 tablespoons oil. Add about 10 meatballs to pan; cook until well browned all over, about 3 minutes. Place on a baking sheet lined with paper towels. Repeat procedure 3 times with remaining oil and remaining meatballs.
                        </Typography>
                        <Typography paragraph>
                            3. Bring stock to a simmer in a large Dutch oven over medium. Add escarole; cook until tender, about 3 minutes. Add meatballs, chicken, quartered eggs, remaining 1/2 teaspoon salt, and remaining 1/2 teaspoon pepper; serve immediately.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            {/* ///////card 8 */}
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
                            Peaking duck is just the bomb .com It's good, you'll want more and you'll enjoy everything else a little more that day because of this main dish. Enjoy and when you get chance pay a little more to get that great experience of peaking duck made by an excellent chef(unless your that chef! Then adopt me please!)
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
                            [classes.expandOpen]: expanded7,
                        })}
                        onClick={handleExpandClick7}
                        aria-expanded={expanded7}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded7} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <strong>Ingredients:</strong>
                                &#8226; 1 (4 pound) whole duck, dressed
                                &#8226; ½ teaspoon ground cinnamon
                                &#8226; ½ teaspoon ground ginger
                                &#8226; ¼ teaspoon ground nutmeg
                                &#8226; ¼ teaspoon ground white pepper
                                &#8226; ⅛ teaspoon ground cloves
                                &#8226; 3 tablespoons soy sauce
                                &#8226; 1 tablespoon honey
                                &#8226; 1 orange, sliced in rounds
                                &#8226; 1 tablespoon chopped fresh parsley, for garnish
                                &#8226; 5 green onions
                                &#8226; ½ cup plum jam
                                &#8226; 1 ½ teaspoons sugar
                                &#8226; 1 ½ teaspoons distilled white vinegar
                                &#8226; ¼ cup finely chopped chutney
                            </Typography>
                            <Typography paragraph>
                                <strong>Method:</strong><br/>
                                1. Rinse the duck inside and out, and pat dry. Cut off tail and discard. In a small bowl, mix together the cinnamon, ginger, nutmeg, white pepper and cloves. Sprinkle one teaspoon of the mixture into the cavity of the duck. Stir one tablespoon of the soy sauce into the remaining spice mixture and rub evenly over the entire outside of the bird. Cut one of the green onions in half and tuck inside the cavity. Cover and refrigerate the bird for at least 2 hours, or overnight.
                            </Typography>
                            <Typography paragraph>
                                2.Place duck breast side up on a rack in a big enough wok or pot and steam for an hour adding a little more water, if necessary, as it evaporates. Lift duck with two large spoons, and drain juices and green onion.
                            </Typography>
                            <Typography paragraph>
                                3. Preheat the oven to 375 degrees F (190 degrees C). Place duck breast side up in a roasting pan and prick skin all over using a fork.
                            </Typography>
                            <Typography paragraph>
                                4. Roast for 30 minutes in the preheated oven. While the duck is roasting, mix together the remaining 2 tablespoons of soy sauce and honey. After 30 minutes, brush the honey mixture onto the duck and return it to the oven. Turn the heat up to 500 degrees F (260 degrees C). Roast for 5 minutes, or until the skin is richly browned. Do not allow the skin to char.
                            </Typography>
                            <Typography paragraph>
                                5. Prepare the duck sauce by mixing the plum jam with the sugar, vinegar and chutney in a small serving bowl. Chop remaining green onions and place them into a separate bowl. Place whole duck onto a serving platter and garnish with orange slices and fresh parsley. Use plum sauce and onions for dipping.
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