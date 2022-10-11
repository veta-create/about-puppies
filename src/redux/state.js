import stylesForCustomers from '../components/BlockAboutCustomers/style.module.css'
import customer1 from "../assets/images/customer1.png";
import customer2 from "../assets/images/customer2.png";
import customer3 from "../assets/images/customer3.png";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";

let ratingCalc = (rating) => {
  if(rating < 0.5) {
    return Array(5).fill(false)
  };

  return Array(5).fill(false).map((_, index) => index < Math.floor(rating) ? true : false)
}

console.log(ratingCalc(4.2))

export let state = {
  customersPage: {
    customersData: [
      {
        id: 1,
        customerImage: customer1,
        names: "Anna & Tobby",
        text: "Amazing Products & Delivery on time.",
        rating: 4.2,
        ratingBones: ratingCalc(4.2),
        background: stylesForCustomers.yellowBackground,
      },
      {
        id: 2,
        customerImage: customer2,
        names: "Christine & Tom",
        text: "Love the overall Shopping experience!",
        rating: 2.5,
        ratingBones: ratingCalc(2.5),
        background: stylesForCustomers.pinkBackground,
      },
      {
        id: 3,
        customerImage: customer3,
        names: "Sindy & Kitch",
        text: "Kitch is love food from the pup-hub",
        rating: 3.9,
        ratingBones: ratingCalc(3.9),
        background: stylesForCustomers.violetBackground,
      },
    ],
  },
  dogFoodPage: {
    foodData: [
      {
        id: 1,
        productImg: food1,
        name: "Drools|3KG",
        text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
      },
      {
        id: 2,
        productImg: food2,
        name: "Canine Greek 4KG",
        text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
      },
      {
        id: 3,
        productImg: food3,
        name: "Biscork Biscuits",
        text: "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
      }
    ]
  }
};
