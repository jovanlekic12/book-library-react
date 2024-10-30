function EditForm(props) {
  const { title, author, pages } = props;
  return (
    <form className="edit__form">
      <input type="text" className="edit__input edit__title" value={title} />
      <input type="text" className="edit__input edit__author" value={author} />
      <input type="number" className="edit__input edit__pages" value={pages} />
    </form>
  );
}

export default EditForm;
