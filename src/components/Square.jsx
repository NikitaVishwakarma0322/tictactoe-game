const Square = ({ value, onClick, iswinningSquares }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = iswinningSquares ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
