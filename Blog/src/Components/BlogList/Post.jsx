/* eslint-disable react/prop-types */
import "./post.css";
// { language, title, content }
function Post({ language, title, content }) {
 
  return (
    <>
      <div className="col-md-6 postContainer">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary-emphasis">
              {language}
            </strong>
            <h3 className="mb-0">{title}</h3>
            <p className="card-text mb-auto">{content}</p>
            <a
              href="#"
              className="icon-link gap-1 icon-link-hover stretched-link"
            >
              Continue reading
              <svg className="bi">
                <use xlinkHref="#chevron-right"></use>
              </svg>
            </a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              className="bd-placeholder-img"
              width="250px"
              height="100%"
              src="https://www.jrebel.com/sites/default/files/styles/social_preview_image/public/image/2020-05/image-blog-revel-top-java-tools.jpg?itok=34P5v4AD"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
