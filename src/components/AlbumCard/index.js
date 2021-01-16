import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./style.css";

export default function index(props) {
  return (
    <Card onClick={() => props.onClick()} className="root">
      <CardHeader title={props.title} />
      <img src={props.image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Album Owner : {props.User?.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Email : {props.User?.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Website : {props.User?.website}
        </Typography>
      </CardContent>
    </Card>
  );
}
