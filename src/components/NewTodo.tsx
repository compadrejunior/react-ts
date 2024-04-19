import { useRef, useState } from 'react';

const NewTodo: React.FC<{
  onAddTodo: (id: number, name: string, description: string) => void;
}> = (props) => {
  const [idCount, setIdCount] = useState(1);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    setIdCount(idCount + 1);

    const enteredText = nameInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // prevent rendering empty value
      return;
    }

    const enteredDescription = descriptionInputRef.current!.value;

    if (enteredDescription.trim().length === 0) {
      // prevent rendering empty value
      return;
    }

    props.onAddTodo(idCount, enteredText, enteredDescription);
  };
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="taskName" className="form-label">
              Task name:
            </label>
            <input
              ref={nameInputRef}
              type="text"
              className="form-control"
              id="taskName"
              aria-describedby="namelHelp"
              required
            />
            <div id="nameHelp" className="form-text">
              Please inform the task name.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="taskDescription" className="form-label">
              Description
            </label>
            <input
              ref={descriptionInputRef}
              type="text"
              className="form-control"
              id="taskDescription"
              aria-describedby="descriptionlHelp"
            />
            <div id="descriptionHelp" className="form-text">
              Please inform the task description.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewTodo;
