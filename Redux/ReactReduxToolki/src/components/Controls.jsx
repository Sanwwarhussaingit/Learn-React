import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
// import { counterActions, privacyActions } from "../store/index";


const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    // console.log("Increment called",counterActions.increment());
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    // dispatch({
    //   type: "ADD",
    //   payload: ,
    // });
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    // dispatch({
    //   type: "SUBSTRACT",
    //   payload: { num: inputElement.current.value },
    // });
    dispatch(counterActions.substract(inputElement.current.value));

    inputElement.current.value = "";
  };



  const handlePrivacyToggle = () => {
    // dispatch({type: "TOGGLE_PRIVACY"})

    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center gap-row">
        <input
          type="text"
          className="number-input"
          placeholder="Enter number"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
