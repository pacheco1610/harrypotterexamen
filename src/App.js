import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/index'
import Index from './pages/index'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
