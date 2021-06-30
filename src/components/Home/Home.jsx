import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          srcset=""
          className="logo"
        />
      </div>
      <div className="right">
        <select className="english" name="" id="sideButton">
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
        {/* <button className="english">English</button> */}
        <button className="signIn" id="sideButton">
          Sign In
        </button>
      </div>

      <div className="body">
        <h1 className="h1">
          Unlimited movies, TV <br />
          shows and more.
        </h1>
        <h3 className="h3">Watch anywhere. Cancel anytime.</h3>
        <p className="p">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input type="text" placeholder="Email address" className="input" />
        <button className="getStarted">
          Get Started{String.fromCharCode(8594)}
        </button>
      </div>
      <div className="subscribe"></div>
    </div>
  );
}
