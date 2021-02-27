import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, active, isRed, isGrey, total, ...props }) {
  return (
    <div>
      <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        } ${isGrey && "infoBox--grey"}`}
      >
        <CardContent>
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>

          <h2
            className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
              isGrey && "infoBox__cases--grey"
            }`}
          >
            {props.isLoading ? (
              <i className="fa fa-cog fa-spin fa-fw" />
            ) : (
              cases
            )}
          </h2>

          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
