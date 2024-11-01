import { useState } from "react";
import EditForm from "./editForm";

function Book(props) {
  const {
    title,
    author,
    pages,
    isRead,
    isEditing,
    id,
    handleIsRead,
    handleDeleteBook,
    handleEditing,
  } = props;

  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);
  const [bookPages, setBookPages] = useState(pages);

  return (
    <li className="list__item">
      {isEditing ? (
        <EditForm
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
          bookPages={bookPages}
          setBookAuthor={setBookAuthor}
          setBookTitle={setBookTitle}
          setBookPages={setBookPages}
        ></EditForm>
      ) : (
        <div className="book__info__div">
          <h1 className="book__title">{bookTitle}</h1>
          <h1 className="book__author">{bookAuthor}</h1>
          <h2 className="book__pages">
            {bookPages} {bookPages > 1 ? "pages" : "page"}
          </h2>
        </div>
      )}
      <div className="book__btn__container">
        <button className="book__btn" onClick={() => handleIsRead(id)}>
          {isRead ? "✔Read" : "❌Read"}
        </button>
        <button className="book__btn" onClick={() => handleDeleteBook(id)}>
          Delete
        </button>
        <button className="book__btn" onClick={() => handleEditing(id)}>
          Edit
        </button>
      </div>
    </li>
  );
}

export default Book;
