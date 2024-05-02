import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="top-section">
        <div className="portfolio-container">
          <div>
            <p className="subtitle">Nedelina Staynova - Web/Graphics Design</p>
            <h1>
              Web <br />
              Design <br />
              Portfolio <br />
            </h1>
            <button className="contact-button">Contact me</button>
          </div>
          <div></div>
        </div>
        <hr />
        <div className="about-section">
          <img src="profile_holder.png" alt="Profile Image" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <h2>TEST</h2>
      </div>
    </>
  );
}

export default HomePage;
