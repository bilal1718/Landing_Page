import React from 'react';
import "../meet.css";

const MeetFounder = () => {
  return (
    <section className="about-us">
        <h2>Meet Our <span>Founder</span></h2>
      <div className="about">
      <img
          src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.215384241.1705058208&semt=ais"
          className="pic"
          alt="Founder"
        />
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus
            ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id
            eos adipisci iusto molestias asperiores explicabo cum vero atque amet
            corporis! Soluta illum facere consequuntur magni. Ullam dolorem
            repudiandae cumque voluptate consequatur consectetur, eos provident
            necessitatibus reiciendis corrupti!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetFounder;
