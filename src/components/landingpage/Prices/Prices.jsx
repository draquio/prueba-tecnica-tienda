import { PriceIcon, StarIcon, StatIcon } from "../../Icons/Icons";
import "./Prices.scss";
export const Prices = () => {
  return (
    <div className="price_container" id="best">
      <div className="prices_section">
        <div className="prices_section_info">
          <h2>Best Phones</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            alias, soluta ipsam esse perferendis.
          </p>
        </div>
        <div className="prices_section_prices">
          <div className="prices_section_prices_item">
            <PriceIcon />
            <h3>iPhone 15 Pro Max</h3>
            <span className="subtitle">
              Apple
            </span>
            <h4>$1,199</h4>
            <ul>
              <li>
                <b>Pantalla</b> OLED 6.7 pulgadas
              </li>
              <li>
                <b>Procesador</b> A16 Bionic
              </li>
              <li>
                <b>Cámara</b> triple 48MP
              </li>
              <li>
                <b>Dynamic Island </b> innovadora
              </li>
              <li>
                <b>Batería de larga duración</b>
              </li>
              <li>
                <b>Pantalla</b> Super Retina XDR
              </li>
              <li>
                <b>Triple cámara</b> con machine learning
              </li>
              <li>
                <b>Chasis de titanio</b>
              </li>
              <li>
                <b>Zoom</b> óptico x5
              </li>
              <li>
                <b>A17 Pro con 5G</b>
              </li>
            </ul>
            <div className="btn_buy_section">
              <button className="btn blue_btn_inverted">Buy now</button>
            </div>
          </div>
          <div className="prices_section_prices_item main_item">
            <StatIcon />
            <div className="most_popular">Most Popular</div>
            <h3>Galaxy S23 Ultra</h3>
            <span className="subtitle">
              Galaxy
            </span>
            <h4>$1,299</h4>
            <ul>
              <li>
                <b>Pantalla Edge QHD+ 6.8</b>
              </li>
              <li>
                <b>Procesador</b> Snapdragon 8 Gen 2
              </li>
              <li>
                <b>Cámara</b> principal 200MP
              </li>
              <li>
                <b>Batería 5000mAh</b>
              </li>
              <li>
                <b>S-Pen compatible</b>
              </li>
              <li>
                <b>Pantalla</b> AMOLED 2x 120 Hz
              </li>
              <li>
                <b>Carga inalámbrica rápida</b>
              </li>
              <li>
                <b>Triple cámara</b> trasera
              </li>
              <li>
                <b>Cámara</b> frontal 12 MP
              </li>
              <li>
                <b>Resolución</b> 2.796 x 1.290 píxeles
              </li>
            </ul>
            <div className="btn_buy_section">
              <button className="btn blue_btn btn_buy">Buy now</button>
            </div>
          </div>
          <div className="prices_section_prices_item">
            <StarIcon />
            <h3>Xiaomi 13T Pro</h3>
            <span className="subtitle">
            Xiaomi 
            </span>
            <h4>$799</h4>
            <ul>
              <li><b>Pantalla</b> AMOLED 144 Hz</li>
              <li><b>Brillo máximo</b> 2.600 nits</li>
              <li><b>Snapdragon</b> 8 Gen 2</li>
              <li><b>Batería</b> 4,600 mAh</li>
              <li><b>Cámara triple</b> 50 MP</li>
              <li><b>Cámara selfie</b> 16 MP</li>
              <li><b>Pantalla Full HD+</b> 120 Hz</li>
              <li><b>Carga rápida</b> de 67W</li>
              <li><b>8GB RAM</b>, 256GB almacenamiento</li>
              <li><b>Sensor principal</b> 108 MP</li>
            </ul>
            <div className="btn_buy_section">
              <button className="btn blue_btn_inverted btn_buy">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
