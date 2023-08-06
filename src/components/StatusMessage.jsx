import Square from './Square';
// import PropTypes from "prop-types";

const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const statusMessage = winner
    ? `Winner is ${winner}`
    : `NextPlayer is ${nextPlayer}`;

  const renderstatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-orange"> O</span> and{' '}
          <span className="text-green"> X</span> tied
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <h2 className="status-message">{renderstatusMessage()}</h2>;
};

export default StatusMessage;

// StatusMessage.propTypes = {
//   item: PropTypes.object.isRequired,
//   onItemClick: PropTypes.func.isRequired,
//   viewState: PropTypes.object,
//   selectedItem:PropTypes.object
// };
