

function Navbar() {
  return (
    <div>
      <div className="bg-transparent--60">
        <nav className="navbar navbar-dark navbar-expand">
          <a href="/" className="navbar-brand font-weight-bold">Chatapp</a>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="/chat" className="nav-link">Chat Pannel</a></li>
            <li className="nav-item"><a href="/signin" className="nav-link">Signin</a></li>
            <li className="nav-item"><a href="/signup" className="nav-link">Signup</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
