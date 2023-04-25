import "./App.css";

function Footer() {
  return (
    <>
      <footer>
        <a href="https://github.com/Mr-703" target="_blank">
          <img className="footerImg" src="/github-logo.png" alt="githubLogo" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-sethi-326a04211/"
          target="_blank"
        >
          <img className="footerImg" src="/linkedin.png" alt="linkedinLogo" />{" "}
        </a>
        <a
          href="/Ryan Sethi CV.png"
          download="Ryan Sethi CV.png"
          target="_blank"
        >
          <img className="footerImg" src="/cv.png" alt="cvLogo" />{" "}
        </a>
      </footer>
    </>
  );
}
export default Footer;
