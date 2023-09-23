import PriceOption from "./PriceOption";

const PriceOptions = () => {

  const priceOptions = [
      {"id": 1, "name": "Basic Membership", "description": "Access to basic gym facilities", "features": [
          "Unlimited access to gym equipment",
          "Locker room access",
          "Basic fitness classes",
          "No contract commitment",
          "Access to online workout plans",
          "Fitness assessment"
        ], "price": 30.00},
      {
        "id": 2,
        "name": "Premium Membership",
        "description": "Access to premium gym facilities",
        "features": [
          "Unlimited access to gym equipment",
          "Locker room access",
          "Premium fitness classes",
          "Personal trainer sessions (2x per month)",
          "No contract commitment",
          "Nutritional counseling",
          "Access to swimming pool"
        ],
        "price": 50.00
      },
      {
        "id": 3,
        "name": "Gold Membership",
        "description": "Access to all gym facilities and services",
        "features": [
          "Unlimited access to gym equipment",
          "Locker room access",
          "Premium fitness classes",
          "Personal trainer sessions (4x per month)",
          "Access to sauna and spa",
          "No contract commitment",
          "Priority booking for classes",
          "Free guest passes (2 per month)"
        ],
        "price": 80.00
      },
    ];
  


  return (
    <div className="p-5">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="md:grid grid-cols-3 gap-3">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;