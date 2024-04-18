const NewTodo = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task name:
        </label>
        <input
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
  );
};
export default NewTodo;
