import React, { useState } from 'react';
import {decode} from 'html-entities';
import {Card, CardActionArea, CardContent, CardMedia, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StatsIcon from '@material-ui/icons/Assignment';
import useStyles from './styles';
import { createPokemon, fetchPokemon, updatePokemon } from "../../../api/index";

function GetPokemon(pokemon) {
    fetchPokemon(pokemon.pokemon.id)
      .then((res) => {
        console.log(res)
        return (
        <>
          <Typography>Passes: {res.data.downVotes}</Typography>
          <Typography>Passes: {res.data.downVotes}</Typography>
        </>)
      })
  }

export default function PokemonCard({pokemon, otherPokemon, next, setButtonState}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open)
  }
  function handleClick() {
    fetchPokemon(pokemon.id)
      .then((res) => {
        if (res.data === null) {
          createPokemon(pokemon.id, 1, 0);
        }
        else {
          updatePokemon(pokemon.id, res.data.upVotes + 1, res.data.downVotes);
        }
      })
      .catch((err) => console.log(err));
    fetchPokemon(otherPokemon.id)
      .then((res) => {
        if (res.data === null) {
          createPokemon(otherPokemon.id, 0, 1);
        }
        else {
          updatePokemon(otherPokemon.id, res.data.upVotes, res.data.downVotes + 1);
        }
      })
      .catch((err) => console.log(err));
    setButtonState({ started: true, next: true });
  }
  return (
    <Card className={classes.root} style={{backgroundColor: "#FFCB05"}} variant="outlined">
      {next ?
        <CardContent>
          <GetPokemon pokemon={pokemon}/>
      </CardContent>
      :
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={pokemon.image}
          title="Pokemon"
        />
      </CardActionArea>
      }
      <CardContent>
          <Typography gutterBottom variant="h5" className={classes.text} component="h2">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
            {decode(pokemon.description, {level: 'all'})}
        </Typography>
        <List>
          <ListItem button onClick={handleOpen}>
            <ListItemIcon>
              <StatsIcon/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Stats" />
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Object.entries(pokemon.base).map(([key, value]) => {
                var color = classes.same;
                if (value > otherPokemon.base[key]) {
                  color = classes.more
                }
                else if (value < otherPokemon.base[key]) {
                  color = classes.less
                }
                else {
                  color = classes.same
                }
                return(
                <ListItem>
                    <ListItemText className={classes.text}>{key + ": "}<span className={color}>{value}</span></ListItemText>
                </ListItem>)
              })}
            </List>
          </Collapse>
        </List>
      </CardContent>
    </Card>
  );
}