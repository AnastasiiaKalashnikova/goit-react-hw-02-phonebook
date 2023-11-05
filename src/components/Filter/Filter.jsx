export const Filter = ({ toFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={evt => toFilter(evt.target.value)}
      />
    </div>
  );
};
