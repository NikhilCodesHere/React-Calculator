import React, { useState } from "react";
import { formatter } from "../assets/investment";
import Table from "./Table";
import { calculateInvestmentResults } from "../assets/investment";

export default function InputBox() {
  const [inititalInvestment, setinitialInvestment] = useState(0);
  const [expectedReturns, setexpectedReturns] = useState(0);
  const [annualInvestment, setannualInvestment] = useState(0);
  const [duration, setDuration] = useState(0);
  const [investmentResults, setInvestmentResults] = useState([]);

  function handleCalculation() {
    const output = calculateInvestmentResults(inititalInvestment, annualInvestment, expectedReturns, duration);
    console.log("result ", output);
    setInvestmentResults(output);
  }
  if (inititalInvestment > 0 && annualInvestment > 0 && expectedReturns > 0 && duration > 0) {
    handleCalculation(inititalInvestment, annualInvestment, expectedReturns, duration);
  }
  

  return (
    <div>
      <div id="inputbox">
        <div className="twobox">
          <div className="block" style={{ display: "inline-block" }}>
            <label className="labelstyle">Initial Investment</label>
            <input type="number" value={inititalInvestment} onChange={(e) => setinitialInvestment(parseInt(e.target.value, 10))} />
          </div>
          <div className="block" style={{ display: "inline-block" }}>
            <label className="labelstyle">Annual Investment</label>
            <input type="number" value={annualInvestment} onChange={(e) => setannualInvestment(parseInt(e.target.value, 10))} />
          </div>
        </div>

        <div className="0">
          <div className="block" style={{ display: "inline-block" }}>
            <label className="labelstyle">Expected Returns</label>
            <input type="number" value={expectedReturns} onChange={(e) => setexpectedReturns(parseInt(e.target.value, 10))} />
          </div>
          <div className="block" style={{ display: "inline-block" }}>
            <label className="labelstyle">Duration</label>
            <input type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value, 10))} />
          </div>
        </div>
      </div>
      {/* <Table duration={duration} expectedReturns = {expectedReturns} annualInvestment= {annualInvestment} inititalInvestment = {inititalInvestment} /> */}
      <Table />
    </div>
  );
}
