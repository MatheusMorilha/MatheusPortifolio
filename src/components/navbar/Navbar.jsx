import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><a href="#">Matheus</a></div>
      <ul className="nav-links">
        <li><a href="#">Início</a></li>
        <li><a href="#project-link">Projetos</a></li>
        <li><a href="#historic-section">Experiências</a></li>
      </ul>
    </nav>
  )
}