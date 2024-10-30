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

  return (
    <li className="list__item">
      {isEditing ? (
        <EditForm title={title} author={author} pages={pages}></EditForm>
      ) : (
        <div className="book__info__div">
          <h1 className="book__title">{title}</h1>
          <h1 className="book__author">{author}</h1>
          <h2 className="book__pages">
            {pages} {pages > 1 ? "pages" : "page"}
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
