export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <div>
        {options.map((key, index) => (
          <button key={index} onClick={() => onLeaveFeedback(key)}>
            {key}
          </button>
        ))}
      </div>
    </>
  );
};
