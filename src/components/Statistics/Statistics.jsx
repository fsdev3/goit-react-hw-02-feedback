export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {/* <p>Statistics</p> */}
      <ul>
        <li>
          Good:<span> {good}</span>
        </li>
        <li>
          Neutral:<span> {neutral}</span>
        </li>
        <li>
          Bad:<span> {bad}</span>
        </li>
        <li>
          Total:<span> {0 | total}</span>
        </li>
        <li>
          Positive feedback:
          <span> {0 | positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
