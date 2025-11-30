// Firebase Collections
export const USERS = "users";
export const CHATS = "chats";

export const SCREEN_NAME = "SCREEN_NAME";
export const EMAIL_DOMAIN = "@weout.web.app";

export const getTimestamp = () => {
  const date = new Date();
  const dateString = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
  const timeString = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${dateString} ${timeString}`;
};

export const closeModal = (elementId) => {
  const modalElement = document.getElementById(elementId);
  if (modalElement) {
    const bootstrap = window.bootstrap;
    const modalInstance =
      bootstrap && bootstrap.Modal && bootstrap.Modal.getInstance
        ? bootstrap.Modal.getInstance(modalElement)
        : null;

    if (modalInstance) {
      modalInstance.hide();
    }
  }
};
