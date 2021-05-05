import React from "react";
import InputField from "./components/InputField";
import styled from "styled-components";

const Body = styled.div`
  text-align: center;
  background: radial-gradient(slategray 30%, darkslategray);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  box-sizing: border-box;
`;

const DivGreen = styled.div`
  color: lightgreen;
  text-shadow: 0.1vw 0.1vw lightseagreen;
  font-size: 1.3vw;
`;

const ParaGold = styled.p`
  color: beige;
  text-shadow: 0.1vw 0.1vw goldenrod;
  font-size: 1.3vw;
  transition: ease 0.25 all;
  :hover {
    font-size: 1.8vw;
    font-weight: bold;
    color: gold;
  }
`;

const HeaderStyle = styled.header`
  color: goldenrod;
  text-shadow: 0.2vw 0.1vw darkgoldenrod;
  font-weight: bold;
  font-size: 1.5vw;
  padding: 0;
  margin: 0;
  line-height: 0vh;
`;

function App() {
  const [savings, setSavings] = React.useState(0);
  const [interestRate, setInterestRate] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const onSavingsChange = (e: any) => setSavings(+e.target.value);
  const onInterestRateChange = (e: any) => setInterestRate(+e.target.value);
  const onTimeChange = (e: any) => setTime(+e.target.value);
  return (
    <Body>
      <HeaderStyle>
        <h1>
          <p>Check the value</p>
          <p>of your investments</p>
          <p>over time</p>
        </h1>
      </HeaderStyle>
      <form>
        <DivGreen>
          <InputField
            label="Savings: "
            type="number"
            id="savings"
            value={savings}
            onChange={onSavingsChange}
            placeholder="Enter a number"
          />
        </DivGreen>
        <DivGreen>
          <InputField
            label="Interest rate: "
            type="number"
            id="rate"
            value={interestRate}
            onChange={onInterestRateChange}
            placeholder="Enter interest rate"
          />
        </DivGreen>
        <DivGreen>
          <InputField
            label="Time: "
            type="number"
            id="time"
            value={time}
            onChange={onTimeChange}
            placeholder="Enter years"
          />
        </DivGreen>
      </form>
      <ParaGold>
        Result:{" "}
        {Math.round(savings * (1 + interestRate / 100) ** time * 100) / 100}
      </ParaGold>
    </Body>
  );
}

export default App;
