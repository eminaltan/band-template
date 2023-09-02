import "./_footer.scss";

const SocialItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        title={props.title}
        className={`footer__icon ${props.modifier}`}
      ></a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h2>CONTACT</h2>
        <em>Fan? Drop a note!</em>
        <address>
          <ul>
            <li>Chicago, US</li>
            <li>Phone: +00 151515</li>
            <li>Email: mail@mail.com</li>
          </ul>
        </address>
        <form
          action=""
          method="post"
        >
          <input
            type="text"
            placeholder="Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="text"
            placeholder="Message"
          />

          {/* TODO: Create Button.jsx component to seperate from Main.jsx
            component */}
          <button>SEND</button>
        </form>
      </div>

      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        alt=""
      />
      <ul className="footer__social">
        <SocialItem
          href="#"
          title={"Fallow us on Facebook"}
          modifier={"footer__icon_facebook"}
        />
        <SocialItem
          href="#"
          title={"Fallow us on Instagram"}
          modifier={"footer__icon_instagram"}
        />
        <SocialItem
          href="#"
          title={"Fallow us on Pinterest"}
          modifier={"footer__icon_pinterest"}
        />
        <SocialItem
          href="#"
          title={"Fallow us on Linkedin"}
          modifier={"footer__icon_linkedin"}
        />
        <SocialItem
          href="#"
          title={"Fallow us on Twitter"}
          modifier={"footer__icon_twitter"}
        />
        <SocialItem
          href="#"
          title={"Fallow us on Slack"}
          modifier={"footer__icon_slack"}
        />
      </ul>
      <p>Powered by ReklamFab.</p>
    </footer>
  );
};
export default Footer;
