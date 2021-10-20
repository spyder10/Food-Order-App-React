import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dal Makhni",
    description: "Finest dal with delicious butter",
    price: 175,
  },
  {
    id: "m2",
    name: "Cheeze Tomato",
    description: "Cheeze on top on tasty tomato gravy",
    price: 185,
  },
  {
    id: "m3",
    name: "Butter Naan",
    description: "fresh Indian Naan",
    price: 45,
  },
  {
    id: "m4",
    name: "Paneer Butter Masala",
    description: "Tasty paneer with veg gravy",
    price: 180,
  },
];
function AvailableMeals() {
  return (
    <section>
      <Card className={styles.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem meal={meal} key={meal.id} />;
          })}
        </ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
