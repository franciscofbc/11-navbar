import { useEffect, useRef, useState } from 'react';
import { links, social } from '../data';
import logo from '../logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const refNav = useRef(null);
  const [height, setHeight] = useState('');

  useEffect(() => {
    refNav.current !== null &&
      setHeight(refNav.current.getBoundingClientRect().bottom);
  }, [showLinks]);

  const navbar = () => {
    return (
      <nav ref={refNav}>
        <ul>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <section
        className="menu-mobile menu"
        style={{
          height: showLinks ? `${height}px` : '72px',
        }}
      >
        <div>
          <img src={logo} alt="logo" />
          <button
            type="button"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <span></span> <span></span> <span></span>
          </button>
        </div>
        {showLinks && navbar()}
      </section>
      <section className="menu-desktop menu">
        <img src={logo} alt="logo" />
        {navbar()}
        <nav className="nav-social">
          <ul>
            {social.map(({ id, url, icon }) => (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
