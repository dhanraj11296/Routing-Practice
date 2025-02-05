import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import './App.css'
const App = () => (
  <div className="appContainer">
    <div className="responsiveContainer">
      <Header />
      <div className="appBody">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
