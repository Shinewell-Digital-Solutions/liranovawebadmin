
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import BadgeContext from "../../Helper/BadgeContext";
import SettingContext from "../../Helper/SettingContext";

import { useTranslation } from "react-i18next";

const MenuList = ({ menu, level, setActiveMenu, activeMenu }) => {

  const { t } = useTranslation('common');
  const [newMenu, setNewMenu] = useState(menu);
  const { searchSidebarMenu, setSearchSidebarMenu } = useContext(SettingContext);
  const { state } = useContext(BadgeContext);
  const [parentMenu, setParentMenu] = useState("");
  const router = usePathname();

  // This useEffect is for active the menu on refresh the page
  useEffect(() => {
    setParentMenu("");
    if (router) {
      menu?.forEach((element) => {
        if (element.children) {
          element.children.forEach((child) => {
            if (child.path == router.split("/")[1]) {
              setParentMenu(element.title);
            } else if (router.includes(child.path)) {
              setParentMenu(element.title);
            }
          });
        } else if (element.path == router.split("/")[1]) {
          {
            setParentMenu(element.title);
            return true;
          }
        } else {
          let splitPath = router.split("#");
          if (splitPath[0] == element.path) {
            setParentMenu(element.title);
          }
        }
      });
    }
  }, [router]);

  // Setting Badges in sidebar
  const customBadge = () => {
    let tempMenu = [...newMenu];
    tempMenu.forEach((elem) => {
      const match = state?.badges?.find((item) => item.path == elem.path);
      if (match) {
        elem.badgeValue = match.value;
      } else return false;
    });
    setNewMenu(tempMenu);
  };
  // Calling customBadge on state.badges changes
  useEffect(() => {
    customBadge();
  }, [state.badges]);

  useEffect(() => {
    setSearchSidebarMenu(newMenu);
  }, [newMenu]);

  return (
    <>
      {/* sidebar menu list item */}
      {newMenu?.map((mainMenu, i) => (
        <li className="sidebar-list new-list-item" key={i}>
          <>
            {mainMenu.path ? (
              <Link href={mainMenu.path} className={`sidebar-link sidebar-title link-nav ${parentMenu === mainMenu.title ? "active" : ""}`}>
                <div className="svg-icon">{mainMenu.icon}</div>
                <span>{t(mainMenu.title)}</span>
                {mainMenu?.badgeValue > 0 && <span className="badge bg-warning ml-3 text-dark btn-secondary">{mainMenu?.badgeValue}</span>}
              </Link>
            ) : (
              <a
                className={`sidebar-link sidebar-title link-nav ${parentMenu === mainMenu.title ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setParentMenu((prev) => prev !== mainMenu.title && mainMenu.title);
                }}
              >
                <div className="svg-icon">{mainMenu.icon}</div>
                <span>{t(mainMenu.title)}</span>
                {mainMenu.children && (parentMenu === mainMenu.title ? <RiArrowDownSLine className="icon-arrow" /> : <RiArrowRightSLine className="icon-arrow" />)}
              </a>
            )}
            {mainMenu.children && (
              <ul className={`sidebar-submenu ${parentMenu === mainMenu.title ? "d-block" : "d-none"}`}>
                <MenuList menu={mainMenu.children} level={level + 1} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              </ul>
            )}
          </>
        </li>
      ))}

      {/* liranova css menu list */}
      <style>{`
      .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper .sidebar-main .sidebar-links > li .sidebar-link:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#118f79 !important;
    opacity: 0;
    z-index: -1;
    }
    .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper .sidebar-main .sidebar-links > li .sidebar-link:hover{
      background-color:#118f79 !important;
      }
      
      `}</style>
    </>
  );
};

export default MenuList;
