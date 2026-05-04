import css from './Feedback.module.css';

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

export default function Feedback({
  votes,
  totalVotes,
  positiveRate,
}: Props) {
  return (
    <div className={css.feedback}>
      <p>Good: {votes.good}</p>
      <p>Neutral: {votes.neutral}</p>
      <p>Bad: {votes.bad}</p>
      <p>Total: {totalVotes}</p>
      <p>Positive: {positiveRate}%</p>
    </div>
  );
}