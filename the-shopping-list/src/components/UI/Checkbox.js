const Checkbox = ({ onClick }) => {
  return (
    <label class="container">
      One
      <input onClick={onClick} type="checkbox" />
      <span class="checkmark"></span>
    </label>
  );
};

export default Checkbox;
