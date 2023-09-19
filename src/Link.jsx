import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
  return (
      <li className='py-3' key={route.id}>
        <a href={route.path}>{route.name}</a>
      </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired
}

export default Link;