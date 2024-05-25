import { useSelector } from "react-redux";

function BookContainer() {
    const noOfBooks = useSelector(state=>state.numberOfBook)
  return (
    <div>
        <h1>Number of Books {noOfBooks}</h1>

    </div>
    );
}
export default BookContainer;
