
const LoadingSpinner = () => {
  return (
    <div className="d-flex  justify-content-center spinner">
        <div
        className="spinner-border"
        role="status"
        style={{width: "5rem",height: "5rem"}}>
            <span className="visually-hidden ">Loadding</span>
        </div>
      
    </div>
  )
}

export default LoadingSpinner
