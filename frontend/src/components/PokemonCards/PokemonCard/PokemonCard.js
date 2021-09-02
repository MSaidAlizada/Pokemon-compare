import React, { useState } from 'react';
import {decode} from 'html-entities';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StatsIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    borderColor: "#22577A",
    borderWidth: "5px",
  },
  media: {
    height: 140,
  },
});

export default function PokemonCard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open)
  }

  return (
    <Card className={classes.root} style={{backgroundColor: "#FFCB05"}} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg"
          title="Pokemon"
        />
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pikachu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {decode("While sleeping, it generates electricity in the sacs in its cheeks. If it\u2019s not getting enough sleep, it will be able to use only weak electricity.", {level: 'all'})}
        </Typography>
        <List>
          <ListItem button onClick={handleOpen}>
            <ListItemIcon>
              <StatsIcon/>
            </ListItemIcon>
            <ListItemText primary="Stats" />
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Attack: 0" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
}