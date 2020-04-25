import booksService from '../services/booksService.js'
import BookList from '../cmps/BookList.jsx'
import BookDetails from '../pages/BookDetails.jsx'
import BookFilter from '../cmps/BookFilter.jsx'
import AddBook from '../cmps/addBook.jsx'
import BookAddedMsg from '../cmps/BookAddedMsg.jsx'

export default class BookApp extends React.Component {

    state = {
        books: [],
        filterBy: null
    };

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        let books = booksService.query(this.state.filterBy)
        this.setState({ books })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks());
    };

    render() {

        const { books } = this.state;

        return (
            <section className="books-main-container">
                <BookAddedMsg />
                <AddBook refreshBooks={this.loadBooks} />
                <BookFilter onSetFilter={this.onSetFilter} books={books} />
                <BookList onSelectBook={this.onSelectBook} books={books} />
            </section>
        );
    };
};