"use client"

import { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import styles from "./Sidebar.module.scss";
import Typography from "../Typography";
import { SIDEBAR_CONTENT } from "../constants";

const Sidebar = () => {
  const [sidebarContent, setSidebarContent] = useState(SIDEBAR_CONTENT);
  const [toggleSidebar, setToggleSidebar] = useState(false);
   const [currentNav, setCurrentNav] = useState({
     menuIndex: 0,
     subMenuIndex: 0,
   });
  const sidebarRef = useRef(null);
  const sidebarArrowRef = useRef(null);

  useEffect(() => {
    sidebarArrowRef.current.style.left = `${
      sidebarRef.current?.offsetWidth || 0
    }px`;
  }, [toggleSidebar]);

  //   useOnClickOutside(sidebarRef, () => toggleSidebar(false), true);

   const handleNavigation = (e, menuIndex, toggleMenu = true) => {
     e.stopPropagation();
     !toggleSidebar && toggleMenu && setInternalToggleMenu(!toggleSidebar);
     const updatedSidebarContent = sidebarContent.reduce(
       (acc, current, index) => {
         if (index === menuIndex) {
           acc.push({ ...current, hide: false });
         } else acc.push({ ...current, hide: true });
         return acc;
       },
       []
     );
     setSidebarContent(updatedSidebarContent);
   };

   const handleSidebar = (e, menuIndex, subMenuIndex) => {
     e.stopPropagation();
     if (
       subMenuIndex !== currentNav.subMenuIndex ||
       menuIndex !== currentNav.menuIndex
     ) {
       setCurrentNav({ menuIndex, subMenuIndex });
       handleNavigation(e, menuIndex, false);
     }
   };

  return (
    <div className={`z-10 ${styles.sidebarWrapper}`}>
      <div
        className="fixed left-0 top-1/2 rounded-r-md h-24 flex justify-center items-center bg-blue-950 text-white"
        onClick={() => setToggleSidebar((prev) => !prev)}
        ref={sidebarArrowRef}
      >
        <i
          className={classnames("ri-xl", {
            "ri-arrow-right-s-line": !toggleSidebar,
            "ri-arrow-left-s-line": toggleSidebar,
          })}
        />
      </div>
      {toggleSidebar && (
        <nav className="h-screen bg-blue-950 text-white py-3" ref={sidebarRef}>
          <ul>
            {sidebarContent.map((menu, menuIndex) => (
              <li
                className="cursor-pointer"
                key={menuIndex}
                onClick={(e) => handleNavigation(e, menuIndex)}
              >
                <span
                  className={classnames("flex gap-4 p-3", {
                    "bg-slate-900": menuIndex === currentNav.menuIndex,
                  })}
                >
                  <span className={classnames({ invisible: !menu.icontype })}>
                    {menu?.icontype || <i class="ri-message-2-line" />}
                  </span>

                  <div className="flex items-center justify-center gap-4">
                    <Typography
                      component="body2"
                      lineHeight="none"
                      textTransform="capitalize"
                      weight="medium"
                    >
                      {menu.title}
                    </Typography>
                    {menu.children.length !== 0 &&
                      (menu.hide ? (
                        <i class="ri-arrow-right-s-line ri-xl" />
                      ) : (
                        <i class="ri-arrow-down-s-line ri-xl" />
                      ))}
                  </div>
                </span>
                {!menu.hide && toggleSidebar && (
                  <ul className="flex flex-col">
                    {menu.children.map((submenu, subMenuIndex) => (
                      <li
                        key={subMenuIndex}
                        className={classnames(
                          "flex gap-4 my-1 p-3 cursor-pointer",
                          {
                            " bg-slate-900":
                              subMenuIndex === currentNav.subMenuIndex &&
                              menuIndex === currentNav.menuIndex,
                          }
                        )}
                        onClick={(e) =>
                          handleSidebar(e, menuIndex, subMenuIndex)
                        }
                      >
                        <span
                          className={classnames({
                            invisible: !submenu.icontype,
                          })}
                        >
                          {submenu?.icontype || (
                            <i class="ri-message-2-line ri-xl" />
                          )}
                        </span>
                        <Typography
                          component="body2"
                          lineHeight="none"
                          textTransform="capitalize"
                          weight="medium"
                        >
                          {submenu.title}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Sidebar;
