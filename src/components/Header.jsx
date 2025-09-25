import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header({ currentPage }) {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler"
          className="header-logo"
        />
      </Link>
      <nav className="header-breadcrumb">
        <span>{currentPage}</span>
      </nav>
    </header>
  );
}
