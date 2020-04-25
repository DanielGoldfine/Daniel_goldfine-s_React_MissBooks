import BookApp from './pages/BookApp.jsx'
import HomePage from './pages/HomePage.jsx'
import About from './pages/About.jsx'
import BookDetails from './pages/BookDetails.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, NavLink } = ReactRouterDOM


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="main-container flex justify-center align-items-center flex-column">
                    <header className="header">
                        <h1>MissBooks</h1>
                        <nav>
                            <NavLink className="link" to='/'>Home</NavLink>
                            <NavLink className="link" to='/books'>Books</NavLink>
                            <NavLink className="link" to='/about'>About</NavLink>
                        </nav>
                    </header>
                    <Route exact component={BookDetails} path="/book/:bookId" />
                    <Route exact component={HomePage} path="/" />
                    <Route exact component={BookApp} path="/books" />
                    <Route exact component={About} path="/about" />
                </div>
            </Router>
        )
    }
}

