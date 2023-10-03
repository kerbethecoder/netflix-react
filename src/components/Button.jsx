import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white font-lato font-bold py-2 px-4 rounded shadow">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
