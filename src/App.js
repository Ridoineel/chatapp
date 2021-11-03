import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ErrorPage from "./pages/error"
import ChatPannel from "./pages/chat";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact/>
        <Route path="/signup" component={Signup} exact/>
        <Route path="/chat" component={ChatPannel} exact/>
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
