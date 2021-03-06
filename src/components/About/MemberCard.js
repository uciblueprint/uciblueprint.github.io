import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import linkedin_logo from "../../assets/social_media/linkedin.svg";

const useStyles = makeStyles(theme => ({
  card: {
    padding: '.5vw'
  },
}));

export default function MemberCard(props) {
  const classes = useStyles();
  return (
    <Card className="member-card">
      <CardMedia
        className="member-photo"
        image={props.image}
        title="team member photo"
      />
      <CardContent className={classes.card}>
        <Typography variant="body2" color="textSecondary">
          {props.name}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {props.role}
        </Typography>
        <div class='logo'>
          <a href={props.linkedin}>
            <img style={{height: "20px", margin: "0"}} src={linkedin_logo} alt='linkedin-logo' />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
