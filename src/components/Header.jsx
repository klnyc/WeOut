import { useEffect } from "react";
import {
  HiUserAdd,
  HiMenu,
  RiChatDeleteLine,
  BiExit,
  BiMessageRoundedAdd,
} from "../icons.js";

const HeaderIcons = () => {
  const headerIconClass = "mx-2 header-icon";

  return (
    <div className="col-4 text-end">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add-chat-modal"
        className={headerIconClass}
      >
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Add chat"
        >
          <BiMessageRoundedAdd />
        </div>
      </button>

      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add-user-modal"
        className={headerIconClass}
      >
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Add member"
        >
          <HiUserAdd />
        </div>
      </button>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#delete-chat-modal"
        className={headerIconClass}
      >
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Delete chat"
        >
          <RiChatDeleteLine />
        </div>
      </button>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#sign-out-modal"
        className={headerIconClass}
      >
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Sign out"
        >
          <BiExit />
        </div>
      </button>
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
    <div className="row py-2 fs-6 sticky-top message-window-header">
      <div className="col-4" onClick={() => setShowSideBar(!showSideBar)}>
        <HiMenu className="header-icon" />
      </div>
      <div className="col-4 text-center fw-bold">
        {currentChat && currentChat.name}
      </div>
      <HeaderIcons />
    </div>
  );
};
