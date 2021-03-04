import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as Routers from 'components/Routes';
import Navbar from 'components/Navbar';


const BaseRoute = () => {
    return (
        <>
        <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
        <Routers.Home />
        </Route>
        <Route exact path="/rooms">
        <Routers.RoomList />
        </Route>
        <Route exact path="/rooms/:slug">
        <Routers.SingleRoom />
        </Route>
        <Routers.NotFound />
        </Switch>
        </Router>
        </>
    )
}


export default BaseRoute;