import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import useCharacters from "../services/characters/useCharacters.js";

export default function Header() {
  let location = useLocation();
  const { getCharacterUrl, charactersByRole } = useCharacters();

  const menu = [
    {
      title: "Accueil",
      url: "/"
    },
    {
      title: "Divinités",
      url: "/divinities",
      children: charactersByRole("divinity", "descendant").map(char => ({
        title: char.name,
        url: getCharacterUrl(char.key)
      }))
    },
    {
      title: "Hérauts",
      url: "/heralds",
      children: charactersByRole("great-herald", "herald").map(char => ({
        title: char.name,
        url: getCharacterUrl(char.key)
      }))
    }
  ];

  function getActiveProps(url) {
    return matchPath(location.pathname, {
      path: url,
      exact: true,
      strict: false
    })
      ? { className: "active" }
      : {};
  }

  return (
    <header className="header-section">
      <div className="container-fluid">
        <div className="logo">
          <Link to="/">
            <img src="img/logo.png" alt="" />
          </Link>
        </div>
        <div className="top-social">
          <a
            href="https://www.instagram.com/loukodil"
            target="blank"
            rel="noopener"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="container">
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu">
              <ul>
                {menu.map(firstLevelItem => (
                  <li
                    key={firstLevelItem.url}
                    {...(!firstLevelItem.children &&
                      getActiveProps(firstLevelItem.url))}
                  >
                    <Link to={firstLevelItem.url}>{firstLevelItem.title}</Link>
                    <ul className="dropdown">
                      {(firstLevelItem.children || []).map(secondLevelItem => (
                        <li
                          key={secondLevelItem.url}
                          {...getActiveProps(secondLevelItem.url)}
                        >
                          <Link to={secondLevelItem.url}>
                            {secondLevelItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
}
