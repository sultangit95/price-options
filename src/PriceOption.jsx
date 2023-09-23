import PropTypes from 'prop-types';
import Feature from './Feature';
// import PriceOption from './PriceOption';
const PriceOption = ({option}) => {

  const {name, price, features} = option;
  return (
    <div className='bg-blue-600 rounded-lg p-4 text-white text-center mb-5 flex flex-col justify-between'>
      <h2>
        <span className='text-7xl'>{price}</span>
        <span className='text-3xl'>/mon</span>
        <p className='text-3xl'>{name}</p>
        <div className='pl-6 flex-grow'>
          {
            features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
          }
        </div>
      </h2>
      <button className='bg-green-700 w-full py-2 rounded-md mt-10 hover:bg-green-500 duration-500'>Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object
}

export default PriceOption;