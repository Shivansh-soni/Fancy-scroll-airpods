import React from "react";

function Temp() {
  return (
    <>
      <header>
        <div class="container">
          <h1>CSS is a lot of fun</h1>
        </div>
      </header>
      <section class="section-one">
        <div class="container">
          <h2>Section One Title.</h2>
          img src="images/boardwalk.png" alt= "foggy boardwalk with man walking
          away in the distance">
          <p>
            {" "}
            Netus et malesuada fames ac. <a href="#">
              {" "}
              Sed cras ornare arcu{" "}
            </a>{" "}
            dui vivanus.
            <strong>Elementum integer enim neque</strong> volutpat ac tincidunt
            vitae semper.
          </p>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <h2>Section Two Title.</h2>
          <p>
            Netus et malesuada fames ac. Sed cras ornare arcu dui vivamus.
            Elementum integer enim neque volutpat ac tincidunt vitae semper.
          </p>
          <p>
            Lorem <a href="#"> ipsum dolor sit amet </a>, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt{" "}
            <strong>ut labore et dolore</strong>.{" "}
          </p>
          <a href="" class="btn btn-accent">
            {" "}
            contact us{" "}
          </a>
          <a href="#" class="btn btn-white">
            {" "}
            more info{" "}
          </a>
        </div>
      </section>
    </>
  );
}

export default Temp;
