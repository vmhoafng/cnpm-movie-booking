import Routes from "./app/routes/Routes";
import Button from "./app/components/button/Button";
function App() {
  return (
    <div className="p-10">
      <Routes />
      <Button highlight disabled> Thanh Toan</Button>
    </div>
  );
}

export default App;
