// Firebase Collections
export const USERS = "users";
export const CHATS = "chats";

export const SCREEN_NAME = "SCREEN_NAME";
export const EMAIL_DOMAIN = "@weout.web.app";

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
