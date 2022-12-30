import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import Menu from "./components/Menu";
import DUMMY_MEALS from "./components/Dummy-meals";

function App() {
  return (
    <div className="App">
      <Header />
      <MealsSummary></MealsSummary>
      <Menu mealsList={DUMMY_MEALS}></Menu>
    </div>
  );
}

export default App;
