import { IoWarning } from "../icons.js";

const ErrorAlert = ({ errorMessage }) => {
  return (
    <div class="alert alert-danger d-flex align-items-center mb-0" role="alert">
      <IoWarning className="flex-shrink-0 me-2" size={24} />
      <div>{errorMessage}</div>
    </div>
  );
};

export { ErrorAlert };
