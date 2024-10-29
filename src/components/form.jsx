import { ImCross } from "react-icons/im";
import ReactDOM from "react-dom";
function Form(props) {
  const {
    isFormOpened,
    setIsFormOpened,
    setAuthor,
    setTitle,
    setPages,
    setIsRead,
    handleSubmit,
  } = props;

  return ReactDOM.createPortal(
    <div className="overlay">
      <form className="form" onSubmit={handleSubmit}>
        <ImCross
          className="cross__icon"
          onClick={() => setIsFormOpened(!isFormOpened)}
        />
        <div className="input__div">
          <label htmlFor="title">Title of the book:</label>
          <input
            type="text"
            placeholder="Lord of the Rings"
            className="form__input"
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="input__div">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            placeholder="J.R.R Tolkien"
            className="form__input"
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>
        <div className="input__div">
          <label htmlFor="pages">Number of pages:</label>
          <input
            type="text"
            placeholder="300"
            className="form__input"
            onChange={(event) => setPages(event.target.value)}
            required
          />
        </div>
        <div className="checkbox__div">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(event) => setIsRead(event.target.checked)}
          />
          <h3 className="checkbox__label">Have you read this book?</h3>
          <button className="submit__btn">Submit</button>
        </div>
      </form>
    </div>,
    document.body
  );
}

export default Form;
