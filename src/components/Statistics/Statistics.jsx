import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatsList,
  StatsItem,
  Title,
} from './Statistics.styled';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} color={getRandomHexColor()}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
