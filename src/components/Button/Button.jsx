function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      className="btn btn-dark"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;