const List: React.FC = () => {
  return (
    <h3
      style={{
        listStyleType: "none",
        display: "flex",
        flexDirection: "column",
              gap: "10px",
        
      }}
    >
      <li>Buy a new gaming laptop <button>Delet</button></li>
      <li>Completed a previous task </li>
      <li>Creating Video for Youtube </li>
      <li>Create a new protocal site </li>
    </h3>
  );
};
export default List;
