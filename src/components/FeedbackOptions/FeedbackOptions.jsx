import PropTypes from 'prop-types';
import { Button, Wrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrap>
      {options.map((name, i) => {
        return (
          <Button
            key={i}
            actionType={name}
            onClick={() => {
              onLeaveFeedback(name);
            }}
          >
            {name}
          </Button>
        );
      })}
    </Wrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
