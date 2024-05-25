/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { PostContext } from "../../Context/PostProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function CreatePost() {
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addPost } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addPost({ language, title, content });

    setLanguage("");
    setTitle("");
    setContent("");
  };

  return (
    <div className="container mt-5" style={{ width: "40%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="language" className="form-label">
            Language
          </label>
          <input
            type="text"
            className="form-control"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreatePost;
