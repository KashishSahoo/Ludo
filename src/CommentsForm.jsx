import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty";
  }
  if (!values.remarks) {
    errors.remarks = "Remarks cannot be empty";
  }
  if (!values.rating) {
    errors.rating = "Rating cannot be empty";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // Pass the form data to the parent component via addNewComment
      addNewComment(values);
      // Optionally reset the form after submission
      resetForm();
    },
  });

  return (
    <div>
      <h2>Leave A Comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">
          <b>UserName:</b>
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formik.values.username}
          name="username"
          id="username"
          onChange={formik.handleChange}
        />
        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br /> <br />
        
        <label htmlFor="remarks">
          <b>Remarks:</b>
        </label>
        <textarea
          placeholder="Leave Comment..."
          value={formik.values.remarks}
          name="remarks"
          id="remarks"
          onChange={formik.handleChange}
        ></textarea>
           {formik.errors.remarks ? (
          <div style={{ color: "red" }}>{formik.errors.remarks}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="rating">
          <b>Rating</b>
        </label>
        <input
          type="number"
          placeholder="Rate"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
          id="rating"
        />
        <br /> <br />
        {formik.errors.rating ? (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        ) : null}
        
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
