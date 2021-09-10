import React, { useState, useEffect } from 'react';
import {decode} from 'html-entities';
import {Card, CardActionArea, CardContent, CardMedia, Typography, List, ListItem, ListItemIcon, ListItemText, Collapse} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StatsIcon from '@material-ui/icons/Assignment';
import useStyles from './styles';
import { createPokemon, fetchPokemon, updatePokemon } from "../../../api/index";

export default function PokemonCard({pokemon, otherPokemon, next, setButtonState}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [upDown, setUpDown] = useState({up:0, down: 0})
  useEffect(() => {
    if (next === true) {
      fetchPokemon(pokemon.id)
        .then((res) => {
          setUpDown({up: res.data.upVotes, down: res.data.downVotes})
        })
        .catch((err) => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next])

  function handleOpen() {
    setOpen(!open)
  }
  async function handleClick() {
    let res = await fetchPokemon(pokemon.id)
    if (res.data === null) {
      await createPokemon(pokemon.id, 1, 0);
    }
    else {
      await updatePokemon(pokemon.id, res.data.upVotes + 1, res.data.downVotes);
    }
    res = await fetchPokemon(otherPokemon.id)
    if (res.data === null) {
      await createPokemon(otherPokemon.id, 0, 1);
    }
    else {
      await updatePokemon(otherPokemon.id, res.data.upVotes, res.data.downVotes + 1);
    }
    await setButtonState({ started: true, next: true });
  }
  return (
    <Card className={classes.root} style={{backgroundColor: "#FFCB05"}} variant="outlined">
      {next ?
        <CardContent>
          <Typography>Passes: {upDown.up}</Typography>
          <Typography>Fails: {upDown.down}</Typography>
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