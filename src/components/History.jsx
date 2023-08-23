const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
              style={{ fontWeight: currentMove === index ? 'bold' : 'normal' }}
            >
              {index === 0 ? `New Game` : `Go to Move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
