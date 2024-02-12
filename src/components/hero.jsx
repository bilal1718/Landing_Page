import "../hero.css"

const Hero = () => {
    return (
      <>
        <div className="background" />
        <div className="background-texture" />
        <header className="header">
          <div className="left-content">
            <h1>Imagination Unleashed, Innovation Ignited</h1>
            <p />
            <p className="para">
              Unleashing the power of imagination, we redefine boundaries,
              turning mere thoughts into groundbreaking innovations that shape the future.
            </p>
            <button>Register Now at &#x20B9;499</button>
          </div>
          <hr />
          <img
            className="instructor-pic"
            src="https://img.freepik.com/free-photo/man-with-his-arms-crossed_1368-633.jpg?size=626&ext=jpg&ga=GA1.1.215384241.1705058208&semt=ais"
            alt="Course Instructor"
          />
          <hr />
        </header>
      </>
    );
  }
  export default Hero;
  