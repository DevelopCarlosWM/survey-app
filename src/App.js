import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/screens/home';
import Survey from './components/screens/survey';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from "@date-io/moment"
function App() {
  return (
    <MuiPickersUtilsProvider utils={ MomentUtils }>
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={ Home } />
            <Route path='/survey' component={ Survey } />
            <Redirect from='/' to='/home' />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
