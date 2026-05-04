import css from './VoteOptions.module.css';

type Props = {
  updateVoteOptions: (type: 'good' | 'neutral' | 'bad') => void;
  resetVoteOptions: () => void;
  canReset: boolean;
};

export default function VoteOptions({
  updateVoteOptions,
  resetVoteOptions,
  canReset,
}: Props) {
  return (
    <div className={css.options}>
      <button onClick={() => updateVoteOptions('good')}>Good</button>
      <button onClick={() => updateVoteOptions('neutral')}>Neutral</button>
      <button onClick={() => updateVoteOptions('bad')}>Bad</button>

      {canReset && (
        <button className={css.reset} onClick={resetVoteOptions}>
          Reset
        </button>
      )}
    </div>
  );
}