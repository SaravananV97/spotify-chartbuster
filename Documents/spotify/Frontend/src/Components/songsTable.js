import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    position: "relative",
    minWidth: 275,
    maxheight: 80,
    textAlign: "left",
  },
  title: {
    fontSize: 14,
  },
  song:{
      display: "inline-block"
  },
  rank: {
      position: "absolute",
      top: 10,
      right: 25,
  }
};

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card style = {props.style} onClick = {(nums = 1) => props.onCardClick(nums)} className={classes.card}>
      <CardContent>
    <div className = {classes.song}>
    <div className = {classes}></div>
      <Typography variant="h5" component="h2">
            {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.artists}
        </Typography>
        </div>
        <div className = {classes.song}>
        <div className = {classes.rank}>
        <Typography variant="h5" component="h2">
        {props.rank}
        </Typography>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
