import React, { Component } from "react";
import Home from "./pages/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Outlined from "@material-ui/icons/Brightness3Outlined";
import WbSunnyOutlined from "@material-ui/icons/WbSunnyOutlined";

export default class App extends Component {
  state = {
    isDark: true,
    theme: createMuiTheme({
      palette: {
        type: "dark",
      },
    }),
  };

  toggleTheme = () => {
    if (this.state.isDark) {
      this.setState({
        isDark: false,
        theme: createMuiTheme({
          palette: {
            type: "light",
          },
        }),
      });
    } else {
      this.setState({
        isDark: true,
        theme: createMuiTheme({
          palette: {
            type: "dark",
          },
        }),
      });
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <div>
            <div>
              {this.state.isDark ? (
                <IconButton style={{color: 'black'}} onClick={this.toggleTheme}>
                  <Brightness3Outlined />
                </IconButton>
              ) : (
                <IconButton style={{color: 'black'}} onClick={this.toggleTheme}>
                  <WbSunnyOutlined />
                </IconButton>
              )}
            </div>
          </div>
          <Home />
        </div>
      </ThemeProvider>
    );
  }
}
