import { useEffect } from "react";
import "../styles/Header.scss";
import { Tooltip } from "./Tooltip.jsx";
import {
  HiUserAdd,
  HiMenu,
  RiChatDeleteLine,
  BiExit,
  BiMessageRoundedAdd,
  MdSettings,
} from "../icons.js";

const headerIconsConfig = [
  {
    "data-bs-target": "#add-chat-modal",
    title: "Add chat",
    icon: <BiMessageRoundedAdd />,
  },
  {
    "data-bs-target": "#add-user-modal",
    title: "Add member",
    icon: <HiUserAdd />,
    isChatSetting: true,
  },
  {
    "data-bs-target": "#delete-chat-modal",
    title: "Delete chat",
    icon: <RiChatDeleteLine />,
    isChatSetting: true,
  },
  { "data-bs-target": "#sign-out-modal", title: "Sign out", icon: <BiExit /> },
];

const HeaderIcons = ({ currentChat }) => {
  return (
    <div id="header-icons" className="w-25 flex-fill">
      {headerIconsConfig.map((icon, index) => {
        return (
          <button
            key={index}
            type="button"
            data-bs-toggle="modal"
            data-bs-target={icon["data-bs-target"]}
            className={`header-icon ${
              !currentChat && icon.isChatSetting ? "d-none" : ""
            }`}
          >
            <Tooltip title={icon.title}>{icon.icon}</Tooltip>
          </button>
        );
      })}
    </div>
  );
};

const HeaderDropdown = ({ currentChat }) => {
  return (
    <div id="header-dropdown" className="w-25 flex-fill">
      <button
        className="btn btn-secondary dropdown-toggle header-icon"
        type="button"
        id="headerDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <MdSettings />
      </button>
      <ul className="dropdown-menu" aria-labelledby="headerDropdown">
        {headerIconsConfig.map((icon, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target={icon["data-bs-target"]}
                className={`header-icon dropdown-item ${
                  !currentChat && icon.isChatSetting ? "d-none" : ""
                }`}
              >
                {icon.icon}
                <span className="header-dropdown-menu-item">{icon.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const Header = ({ currentChat, setShowSideBar, showSideBar }) => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.map((t) => t.dispose());
    };
  }, []);

  return (
    <div className="d-flex py-2 px-3 fs-6 sticky-top message-window-header">
      <button
        className="w-25 flex-fill border-0 bg-transparent text-start"
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <HiMenu />
      </button>
      <div className="text-center fw-bold text-truncate text-nowrap">
        {currentChat && currentChat.name}
      </div>
      <HeaderIcons currentChat={currentChat} />
      <HeaderDropdown currentChat={currentChat} />
    </div>
  );
};
