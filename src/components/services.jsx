import "../services.css";

const Services = () => {
  return (
    <section>
      <div className="row">
        <h2 className="section-heading"><span>But,</span><br /> Why should You go ahead with Me? </h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-hammer" />
            </div>
            <h3>Fresh Ingredients</h3>
            <p>
              We use only the freshest and highest quality ingredients in our food products.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-brush" />
            </div>
            <h3>Creative Recipes</h3>
            <p>
              Our team of chefs crafts creative and unique recipes to delight your taste buds.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-wrench" />
            </div>
            <h3>Customization</h3>
            <p>
              Customize your order to fit your preferences and dietary requirements.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup" />
            </div>
            <h3>Timely Delivery</h3>
            <p>
              Enjoy our prompt and reliable delivery services right to your doorstep.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-broom" />
            </div>
            <h3>Clean & Hygienic</h3>
            <p>
              We prioritize cleanliness and maintain high hygiene standards in food preparation.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-plug" />
            </div>
            <h3>Energy-Efficient</h3>
            <p>
              Our operations are committed to energy efficiency and sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
