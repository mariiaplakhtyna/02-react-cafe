import css from './Options.module.css';

type Props = {
  updateFeedback: (type: 'good' | 'neutral' | 'bad') => void;
  resetFeedback: () => void;
  canReset: boolean;
};

export default function Options({
  updateFeedback,
  resetFeedback,
  canReset,
}: Props) {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>

      {canReset && (
        <button className={css.reset} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}