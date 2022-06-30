export const Button = ({ children, action, type = "button" }) => {
  return (
    <button
      className="rounded-md py-2 px-4 bg-gray-700 text-white"
      onClick={action}
      type={type}
    >
      {children}
    </button>
  );
};
