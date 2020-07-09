import React, { Component } from "react";
import Home from "./pages/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppThemeContext from "./AppThemeContext";

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

      this.themeSettings = {
        ...this.themeSettings,
        isDark: false
      }

    } else {
      this.setState({
        isDark: true,
        theme: createMuiTheme({
          palette: {
            type: "dark",
          },
        }),
      });

      this.themeSettings = {
        ...this.themeSettings,
        isDark: true
      }
    }
  };

  themeSettings = {
    toggleTheme: this.toggleTheme,
    isDark: true
  }

  render() {
    return (
      <AppThemeContext.Provider value={this.themeSettings}>
        <ThemeProvider theme={this.state.theme}>
          <div>
            <Home />
          </div>
        </ThemeProvider>
      </AppThemeContext.Provider>
    );
  }
}
