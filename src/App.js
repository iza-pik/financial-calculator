import "./App.css";
import React from "react";
import InputField from "./components/InputField";

function App() {
  const [savings, setSavings] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const onSavingsChange = (e) => setSavings(+e.target.value);
  const onInterestRateChange = (e) => setInterestRate(+e.target.value);
  const onTimeChange = (e) => setTime(+e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <InputField
              label="Savings: "
              id="savings"
              value={savings}
              onChange={onSavingsChange}
            />
          </div>
          <div>
            <InputField
              label="Interest rate: "
              id="rate"
              value={interestRate}
              onChange={onInterestRateChange}
            />
          </div>
          <div>
            <InputField
              label="Time: "
              id="time"
              value={time}
              onChange={onTimeChange}
            />
          </div>
        </form>
        <p>
          Result:{" "}
          {Math.round(savings * (1 + interestRate / 100) ** time * 100) / 100}
        </p>
      </header>
    </div>
  );
}

export default App;
