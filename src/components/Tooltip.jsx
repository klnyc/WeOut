export const Tooltip = ({ title, position = "bottom", children }) => {
  return (
    <div data-bs-toggle="tooltip" data-bs-placement={position} title={title}>
      {children}
    </div>
  );
};
