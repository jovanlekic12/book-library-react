import { ImCross } from "react-icons/im";

function Form() {
  return (
    <form className="form">
      <ImCross className="cross__icon" />
      <div className="input__div">
        <label htmlFor="title">Title of the book:</label>
        <input
          type="text"
          placeholder="Lord of the Rings"
          className="form__input"
        />
      </div>
      <div className="input__div">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          placeholder="J.R.R Tolkien"
          className="form__input"
        />
      </div>
      <div className="input__div">
        <label htmlFor="pages">Number of pages:</label>
        <input type="text" placeholder="300" className="form__input" />
      </div>
      <div className="checkbox__div">
        <input type="checkbox" className="checkbox" />
        <h3 className="checkbox__label">Have you read this book?</h3>
        <button className="submit__btn">Submit</button>
      </div>
    </form>
  );
}

export default Form;
