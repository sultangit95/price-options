import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
  return (
      <li key={route.id}>
        <a href={route.path}>{route.name}</a>
      </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired
}

export default Link;