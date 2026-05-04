import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <ul className={css.list}>
      <li>Good: {votes.good}</li>
      <li>Neutral: {votes.neutral}</li>
      <li>Bad: {votes.bad}</li>
      <li>Total: {totalVotes}</li>
      <li>Positive: {positiveRate}%</li>
    </ul>
  );
}