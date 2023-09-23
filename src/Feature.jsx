import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {
  return (
    <div>
      <p className='flex items-center gap-2'><AiOutlineCheckCircle></AiOutlineCheckCircle>{feature}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string
}

export default Feature;