import Routes from "./app/routes/Routes";
import Button from "./app/components/button/Button";
import Search from "./app/components/inputs/Search";
function App() {
  return (
    <div className="bg-primary w-screen h-screen">
      <Routes />
      <Search/>
    </div>
  );
}

export default App;
