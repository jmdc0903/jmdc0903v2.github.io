const Navbar = () => {
    return (
      <div className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            WD99P React Training V2
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Navbar;