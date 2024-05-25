import { useContext, useRef } from "react";

const CreatePost = () => {
  const {addPost }=useContext(PostListProvider);
  
  
  const userIdElement = useRef();
  const postTitleElement= useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement= useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+));

    addPost(userId,postTitle,postBody,reaction,tags);
    



  }



  return (
    <>
      <form className="create_post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            enter Your userId
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your userid"
            ref={userIdElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you doing this"
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows={4}
            className="form-control"
            id="body"
            placeholder="tell us more abouted.."
            ref={postBodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reaction"
            placeholder="How many  people react to this reaction"
            ref={reactionElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="plese enter using space"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
