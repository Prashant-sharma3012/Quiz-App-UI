import React, { Component } from "react";
import Quiz from "./Quiz";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Outlined from "@material-ui/icons/Brightness3Outlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";
import AppThemeContext from '../AppThemeContext';

const styles = (theme) => ({
  container: {
    backgroundColor: theme.palette.type === "light" ? "#FFF" : "#000",
  },
});

class Home extends Component {
  static contextType = AppThemeContext

  render() {
    return (
      <div className={this.props.classes.container}>
        <div>
          <div>
            {this.context.isDark ? (
              <IconButton style={{ color: "white" }} onClick={this.context.toggleTheme}>
                <Brightness3Outlined />
              </IconButton>
            ) : (
              <IconButton style={{ color: "black" }} onClick={this.context.toggleTheme}>
                <WbSunnyOutlined />
              </IconButton>
            )}
          </div>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
