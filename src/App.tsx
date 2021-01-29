import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import RepositoryList from './components/RepositoryList';

import store from './store';

const App = () => 
<Provider store={store}>
    <div>
        <Router>
          <Route path="/" exact component= {RepositoryList} />
        </Router>
    </div>
</Provider>;

export default App;
