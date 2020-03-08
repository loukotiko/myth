import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

export default function Header() {
  let location = useLocation();

  const menu = [
    {
      title: "Accueil",
      url: "/"
    },
    {
      title: "Divinités",
      url: "/divinities",
      children: [
        {
          title: "Rien",
          url: "/divinities/nothing"
        },
        {
          title: "Conséquences",
          url: "/divinities/consequences"
        },
        {
          title: "Tout",
          url: "/divinities/everything"
        },
        {
          title: "Annihilation",
          url: "/divinities/annihilation"
        },
        {
          title: "Qualia",
          url: "/divinities/qualia"
        }
      ]
    },
    {
      title: "Hérauts",
      url: "/heralds",
      children: [
        {
          title: "Soi",
          url: "/heralds/self"
        },
        {
          title: "Raison",
          url: "/heralds/reason"
        },
        {
          title: "Peur",
          url: "/heralds/fear"
        }
      ]
    }
  ];

  function getActiveClassName(url) {
    return matchPath(location.pathname, {
      path: url,
      exact: true,
      strict: false
    })
      ? "active"
      : "";
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
                    className={
                      !firstLevelItem.children &&
                      getActiveClassName(firstLevelItem.url)
                    }
                  >
                    <Link to={firstLevelItem.url}>{firstLevelItem.title}</Link>
                    <ul className="dropdown">
                      {(firstLevelItem.children || []).map(secondLevelItem => (
                        <li
                          key={secondLevelItem.url}
                          className={getActiveClassName(firstLevelItem.url)}
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
