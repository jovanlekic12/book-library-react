function EditForm(props) {
  const {
    bookTitle,
    bookAuthor,
    bookPages,
    setBookTitle,
    setBookAuthor,
    setBookPages,
  } = props;
  return (
    <form className="edit__form">
      <input
        type="text"
        className="edit__input edit__title"
        value={bookTitle}
        onChange={(event) => setBookTitle(event.target.value)}
      />
      <input
        type="text"
        className="edit__input edit__author"
        value={bookAuthor}
        onChange={(event) => setBookAuthor(event.target.value)}
      />
      <input
        type="number"
        className="edit__input edit__pages"
        value={bookPages}
        onChange={(event) => setBookPages(event.target.value)}
      />
    </form>
  );
}

export default EditForm;
