import { useState } from "react";
import { anecdotes } from "./Anecdota";

export const Anecdote = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotedAnecdoteIndex]}</p>
      <p>has {votes[mostVotedAnecdoteIndex]} votes</p>
    </div>
  );
};
