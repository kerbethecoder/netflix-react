import PropTypes from 'prop-types';

const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4 text-white ">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300 transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            {isOpen ? (
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              />
            ) : (
              <path
                fill="currentColor"
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"
              />
            )}
          </svg>
        </span>
      </div>
      <div
        className={`transition-max-height ease-in-out duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        } overflow-hidden`}>
        <div className="p-4 bg-gray-100">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
};

export default Accordion;
