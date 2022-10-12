import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  // faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import styles from "./Nav.module.css";

const Nav = (props) => {
  const navigate = useNavigate();
  const navItem = ["men", "women", "accessories"];

  const menu = useRef();
  const hamburger = useRef();
  const user = useRef();

  function click(e) {
    e.classList.toggle(`${styles.active}`);
    menu.current.classList.toggle(`${styles.active}`);
  }
  function close() {
    hamburger.current.classList.remove(`${styles.active}`);
    menu.current.classList.remove(`${styles.active}`);
  }
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.menu} ref={menu}>
            <h1
              className={styles.logo}
              onClick={() => {
                navigate("/");
              }}
            >
              Cozy
            </h1>
            <ul>
              {navItem.map((item, i) => {
                return (
                  <li
                    key={(item, i)}
                    onClick={() => {
                      props.setNavIndex(i);
                      close();
                      props.setUnmount(true);
                      setTimeout(() => {
                        navigate(`/${item}`);
                      }, 500);
                    }}
                    className={props.navIndex === i ? `${styles.active}` : null}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.user}>
            <ul ref={user} className={`${styles[props.userColor]}`}>
              <li className={styles.login_btn}>Login</li>
              <li className={styles.cart_icon}>Cart</li>
              <li
                className={styles.hamburger}
                onClick={(e) => {
                  click(e.currentTarget);
                }}
                ref={hamburger}
              >
                <span></span>
                <span></span>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
