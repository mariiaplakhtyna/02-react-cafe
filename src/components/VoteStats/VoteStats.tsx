import css from './VoteStats.module.css';

type Votes = {
  good: number;
  neutral: number;
  bad: number;
};

type Props = {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
};

export default function VoteStatus({
  votes,
  totalVotes,
  positiveRate,
}: Props) {
  return (
    <div className={css.votestats}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive: {positiveRate}%</p>
    </div>
  );
}