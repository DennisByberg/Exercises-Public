import InfoCSS from "./Info.module.css";

const Info = () => {
  return (
    <header>
      <img
        className={InfoCSS.profilePicture}
        src="./src/assets/Dennis1.jpg"
        alt="picture of me"
      />
      <h1>Dennis Byberg</h1>
      <h2>Frontend Developer</h2>
      <h3>dennis.byberg@hotmail.com</h3>
      <section className={InfoCSS.buttons}>
        {/* MAIL */}
        <a href="mailto:dennis.byberg@hotmail.com">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2099/2099199.png"
              alt="mail-icon"
            />
            Email Me
          </button>
        </a>
        {/* LINKED IN */}
        <a href="https://www.linkedin.com/in/dennis-byberg-a919bb21b/">
          <button>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1383/1383262.png"
              alt="linked-in-icon"
            />
            LinkedIn
          </button>
        </a>
      </section>
    </header>
  );
};

export default Info;
