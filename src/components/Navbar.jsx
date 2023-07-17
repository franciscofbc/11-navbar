import { useEffect, useRef, useState } from 'react';
import { links } from '../data';
import logo from '../logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const refNav = useRef(null);
  const [height, setHeight] = useState('');

  useEffect(() => {
    refNav.current !== null &&
      setHeight(refNav.current.getBoundingClientRect().bottom);
  }, [showLinks]);

  return (
    <>
      <section
        className="menu-mobile"
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
        {showLinks && (
          <nav ref={refNav}>
            <ul>
              {links.map(({ id, text, url }) => (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </section>
      <section className="menu">
        <img src={logo} alt="logo" />
        <nav ref={refNav}>
          <ul>
            {links.map(({ id, text, url }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
