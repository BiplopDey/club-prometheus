
import "/workspaces/codespaces-react/src/styles/components/header.css"

export default function Header(){
    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className="nav">
                <a href="/contact" className="nav-link">Contact</a>
                <a href="/blog" className="nav-link">Blog</a>
            </nav>
        </header>
    );
}
