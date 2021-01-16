import React from "react";
import Card from "@material-ui/core/Card";
import "./card.css";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function Index(props) {
  return (
    <Card data-testid="album" onClick={() => props.onClick()} className="root">
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

export default Index;
