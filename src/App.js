import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro', 'sans-serif'
    ].join(','),

  },
  palette: {
    primary: {
      main: '#25283c',
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },


});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main></Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
