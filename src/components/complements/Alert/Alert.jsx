import "./Alert.scss";
const Alert = (props) => {
  const { errorMessage, setErrorMessage, type } = props;
  return (
    <span onClick={() => setErrorMessage("")}>
      <label>
        <input type="checkbox" className="alertCheckbox" autoComplete="off" />
        <div className={`alert ${type}`}>
          <span className="alertClose">X</span>
          <span className="alertText">
            {errorMessage}
            <br className="clear" />
          </span>
        </div>
      </label>
    </span>
  );
};

export default Alert;
