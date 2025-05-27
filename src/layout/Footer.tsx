const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm bg-background text-muted-foreground border-t dark:bg-gray-900">
      <p>
        © {new Date().getFullYear()}
        {". "}
        <span className="text-teal-500 font-semibold">손형수</span>
        <br />
        Email : gudtn2238@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
