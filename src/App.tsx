import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'


import DashBoardPageLayout from './layouts/DashBoardPageLayout';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import PetPage from './pages/PetPage';
import VaccineList from './pages/VaccineList';
import WikiList from './pages/WikiList';

import store from './store';


type Props = {
  loggedIn?: boolean
}

const App: React.FunctionComponent<Props> = () => {
  /** Below comment has to be uncommented when login in complete */
  // const { loggedIn = false } = props;

  // if (!loggedIn) {
  //   return (
  //     <Router>
  //       <Switch>
  //         <Route component={Login} />
  //         {/* <Route component={PageNotFound} /> */}
  //       </Switch>
  //     </Router>
  //   );
  // }
  return (
    <Router>
      <Provider store={store}>
        
          <Switch>
            <Route path="/post" component={PostPage} />
            <Route path="/pet" component={PetPage} />
            <Route path="/vaccine" component={VaccineList} />
            <Route path="/wiki" component={WikiList} />
            {/* <Route path="/add-new-item" component={AddNewItem} />
            <Route path="/send-invitation" component={SendInvitation} />
            <Route path="/transaction/list" component={TransactionList} />
            <Route path="/transaction/:id/edit" component={TransactionEdit} />
            <Route path="/settings" component={Settings} />
            <Route path="/add-category" component={AddCategory} />
            <Route path="/profile" component={Profile} />
            <Route path="/summary">
              <ComingSoon title="Summary" />
            </Route> */}
            <Route path="/user" component={UserPage} />
            <Route path="/" component={DashBoardPageLayout} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
      </Provider>
    </Router>
  )
}

export default App;
