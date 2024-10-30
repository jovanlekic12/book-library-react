import { useState } from "react";
import Form from "./components/form";
import Book from "./components/book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddBook();
    setIsFormOpened(!isFormOpened);
  }

  function handleDeleteBook(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }

  function handleIsRead(id) {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, isRead: !book.isRead };
      } else {
        return book;
      }
    });
    setBooks(newBooks);
  }

  function handleEditing(id) {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, isEditing: !book.isEditing };
      } else {
        return { ...book, isEditing: false };
      }
    });
    setBooks(newBooks);
  }

  function handleAddBook() {
    const newBook = {
      id: self.crypto.randomUUID(),
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
      isEditing: false,
    };
    setBooks((prev) => [...prev, newBook]);
    setIsRead(false);
  }

  return (
    <main className="main__container">
      <h1 className="app__title">Book Library</h1>
      <h3 className="app__description">
        Use the button bellow to add to your library and watch your collection
        grow
      </h3>
      <button
        className="new__book__btn"
        onClick={() => setIsFormOpened(!isFormOpened)}
      >
        New Book
      </button>
      {isFormOpened ? (
        <Form
          setAuthor={setAuthor}
          setTitle={setTitle}
          setPages={setPages}
          setIsRead={setIsRead}
          isFormOpened={isFormOpened}
          setIsFormOpened={setIsFormOpened}
          handleSubmit={handleSubmit}
        />
      ) : (
        ""
      )}
      <ul className="books__list">
        {books.map((book) => {
          return (
            books && (
              <Book
                {...book}
                setIsRead={setIsRead}
                handleDeleteBook={handleDeleteBook}
                handleIsRead={handleIsRead}
                handleEditing={handleEditing}
                key={book.id}
              />
            )
          );
        })}
      </ul>
    </main>
  );
}

export default App;
