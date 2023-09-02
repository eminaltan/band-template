import Button from "./Button";
import "./_main.scss";

const PhotoArea = (props) => {
  return (
    <div className="photo-area">
      <p>{props.imgTitle}</p>
      <img
        src={props.imgSrc}
        alt={props.İmgAlt}
      />
    </div>
  );
};

const Ticket = (props) => {
  return <p className="ticket__content">{props.month}</p>;
};

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.imgSrc}
        alt=""
      />
      <ul>
        <li>{props.city}</li>
        <li>{props.date}</li>
        <li>{props.content}</li>
      </ul>
      <Button
        modifier={"buttons_standart"}
        content={"Buy Tickets"}
      />
    </div>
  );
};

const Main = () => {
  return (
    <main className="content">
      <article className="content__top">
        <h2>THE BAND</h2>
        <p>
          <em>We love music</em>
        </p>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </article>
      <article className="content__middle">
        <PhotoArea
          imgTitle={"Name"}
          imgSrc={"https://www.w3schools.com/w3images/bandmember.jpg"}
          İmgAlt={"A phographer"}
        />
        <PhotoArea
          imgTitle={"Name"}
          imgSrc={"https://www.w3schools.com/w3images/bandmember.jpg"}
          İmgAlt={"A phographer"}
        />
        <PhotoArea
          imgTitle={"Name"}
          imgSrc={"https://www.w3schools.com/w3images/bandmember.jpg"}
          İmgAlt={"A phographer"}
        />
      </article>
      <article className="content__bottom">
        <h2>TOUR DATES</h2>
        <p>
          <em>Remember to book your tickets!</em>
        </p>
        <div className="wrapper">
          <div className="wrapper__ticket">
            <Ticket month={"Semptember"} />
            <Ticket month={"October"} />
            <Ticket month={"November"} />
          </div>

          <div className="wrapper__events">
            <Card
              imgSrc={"https://www.w3schools.com/w3images/newyork.jpg"}
              city={"New York"}
              date={"Fri 27 Nov 2016"}
              content={
                "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
              }
            />
            <Card
              imgSrc={"https://www.w3schools.com/w3images/paris.jpg"}
              city={"Paris"}
              date={"Sat 28 Nov 2016"}
              content={
                "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
              }
            />
            <Card
              imgSrc={"https://www.w3schools.com/w3images/sanfran.jpg"}
              city={"San Francisco"}
              date={"Sun 29 Nov 2016"}
              content={
                "Praesent tincidunt sed tellus ut rutrum sed vitae justo."
              }
            />
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
