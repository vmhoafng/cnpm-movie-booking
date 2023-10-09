import "./App.css";
import Routes from "./app/routes/Routes";
import Form from "./app/components/inputs/Form";
import Input from "./pages/client/Auth/components/inputs/Input";
function App() {
  return (
    <div className="p-10 bg-primary">
      <Routes />
      <Input
        required
        id="email"
        label="Email address"
        type="email"
        placeholder={"example@gmail.com"}
      />
    </div>
  );
}

export default App;
