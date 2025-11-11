import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">Karen</div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#flights">Flights</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
