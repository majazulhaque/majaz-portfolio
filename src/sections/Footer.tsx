const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/majazulhaque" target="_blank" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="linkedin.com/in/majaz-ul-haque-683b1b239" target="_blank" className="social-icon">
            <img src="/assets/linkedIn.png" alt="linkedin" className="w-1/3 h-1/3" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/majazulhaque/" target="_blank" className="social-icon">
            <img src="/assets/gfg.png" alt="gfg" className="w-1/2 h-1/2" />
          </a>
          <a href="https://x.com/imsharzel" target="_blank" className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.instagram.com/imsharzel/" target="_blank" className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Majaz-ul Haque. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;