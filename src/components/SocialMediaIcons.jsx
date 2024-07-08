const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://web.facebook.com/jona.remos.9/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/libradillajo/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/JLibradilla"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
