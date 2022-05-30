const HeaderLink = ({ href, text }) => {
  return (
    <a
      className="text-base md:text-lg xl:text-2xl transition-all hover hover:opacity-60"
      href={href}
    >
      {text}
    </a>
  );
};

export default HeaderLink;
