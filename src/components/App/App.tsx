import { useState } from 'react';
import './App.css';

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

type Votes = {
  good: number;
  neutral: number;
  bad: number;
};

type FeedbackType = keyof Votes;

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type: FeedbackType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetFeedback = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className="container">
      <CafeInfo />

      <VoteOptions
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        canReset={totalVotes > 0}
      />

      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}