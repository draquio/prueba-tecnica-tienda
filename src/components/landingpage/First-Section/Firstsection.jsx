
import bg from "../../../assets/background.png";
import "./Firstsection.scss";
export const Firstsection = () => {
  return (
    <>
      <div className="first-section">
        <div className="first-section__info">
          <h1>Tu sistema de gestión</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nulla, quod accusamus magnam sunt rerum voluptas placeat, dolorum laborum possimus.</p>
          <button className="btn blue_btn">Login</button>
        </div>
        <div className="first-section__img">
          <img src={bg} />{" "}
        </div>
      </div>
    </>
  );
};
