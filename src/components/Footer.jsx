import React from 'react';
import drink from '../images/footdrink.gif';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="copy">©Copyright 2020</p>
        <p>
          Project developed by
          <a
            href="https://www.linkedin.com/in/rafaelassad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Rafael Assad
          </a>
        </p>
        <img src={drink} alt="estus" width="100px" />
      </footer>
    );
  }
}

export default Footer;
