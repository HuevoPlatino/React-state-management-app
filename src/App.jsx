import { useState } from "react";
import { Button } from "./Button.jsx";
import { StatisticLine } from "./StatisticLine.jsx";
import { Anecdote } from "./Anecdote.jsx";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  console.log(total);
  return (
    <div>
      <div>
        <h2>Anecdotas</h2>
        <Anecdote />
      </div>

      <h2>Give Feedback</h2>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={`${positivePercentage} %`} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
