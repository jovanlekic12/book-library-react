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

  function handleSubmit() {
    handleAddBook();
    setIsFormOpened(!isFormOpened);
  }

  function handleAddBook() {
    const newBook = {
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
      isEditing: false,
    };
    setBooks((prev) => [...prev, newBook]);
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
                title={title}
                author={author}
                pages={pages}
                isRead={isRead}
                key={self.crypto.randomUUID()}
              />
            )
          );
        })}
      </ul>
    </main>
  );
}

export default App;
