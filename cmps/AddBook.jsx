import booksService from '../services/booksService.js'
import FoundBooksList from './FoundBooksList.jsx'
import BookAddedMsg from './BookAddedMsg.jsx'
import { eventBus } from '../services/eventBusService.js'

export default class AddBook extends React.Component {

    state = {
        foundBooks: [],
        bookName: '',
    }

    onAddBook = (book) => {
        booksService.addGoogleBook(book);
        this.setState({ foundBooks: [], bookName: '' });
        this.props.refreshBooks();
        eventBus.emit('show-added-book-msg', book);
    }

    handleChange = ({ target }) => {
        let value = target.value;

        this.setState({bookName: value}, () =>{
            
            if (!this.state.bookName) {
                this.setState({foundBooks: []})
                return
            }
            booksService.getBooksFromApi(this.state.bookName)
                .then(res => {
                    if(!this.state.bookName) res = []
                    this.setState({ foundBooks: res })
                });
        });
    }

    render() {

        const { foundBooks } = this.state

        return (
            <section className="add-book-container">
                <div className="book-search">
                    <input type="text" placeholder="Search Book" value={this.state.bookName} onChange={this.handleChange} />
                </div>
                {(foundBooks.length > 0) && <FoundBooksList foundBooks={foundBooks} onAddBook={this.onAddBook}/>}
            </section>
        )
    }
}