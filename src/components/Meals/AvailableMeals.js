import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "One Piece",
    description: "luffy gear 4 background",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Naruto",
    description: "Sasuke Susanoo background",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Bleach",
    description: "Aizen Villain background",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Conan",
    description: "kaito kid background",
    price: 18.99,
  },
];
const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
