import { useState } from "react";
import stat from '../assets/312.jpg';

const HomeQuickProfit = () => {
  const [plan, setPlan] = useState<"basic" | "standard" | "premium" | "pro">("basic");
  const [amount, setAmount] = useState("");
  const [profit, setProfit] = useState("");

  const calculateProfit = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setProfit("Invalid amount");
      return;
    }

    const rates = {
      basic: 0.05,
      standard: 0.1,
      premium: 0.15,
      pro: 0.2,
    };

    // Using the plan type to ensure we are accessing a valid key
    const planRate = rates[plan]; 
    const totalRate = planRate + 0.5; // Add 50% extra profit
    const profitAmount = amountNum * totalRate;
    setProfit(profitAmount.toFixed(2));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
      <div>
        <img src={stat} alt="Profit Illustration" className="rounded-lg shadow-xl" />
      </div>
      <div>
        <h1 className="uppercase text-sm font-semibold text-gray-400">
          Profit Calculator
        </h1>
        <h1 className="text-4xl font-bold mb-4">Quick Profit Calculate</h1>
        <p className="text-[20px] mt-4 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellat.
        </p>

        <div className="space-y-6 mt-10">
          <div className="flex flex-col">
            <label htmlFor="plan" className="mb-2 ">
              Select Plan
            </label>
            <select
              name="plan"
              id="plan"
              className="p-2 border rounded  bg-gray-200"
              value={plan}
              onChange={(e) => setPlan(e.target.value as "basic" | "standard" | "premium" | "pro")}
            >
              <option value="basic">Basic Plan</option>
              <option value="standard">Standard Plan</option>
              <option value="premium">Premium Plan</option>
              <option value="pro">Pro Plan</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="amountInput" className="mb-2 ">
              Enter Amount
            </label>
            <input
              id="amountInput"
              type="number"
              placeholder="0.00"
              className="p-2 border rounded  bg-gray-200"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profit" className="mb-2 ">
              Profit Amount
            </label>
            <input
              id="profit"
              type="text"
              placeholder="0.00"
              className="p-2 border rounded bg-gray-700 text-gray-300"
              value={profit}
              readOnly
            />
          </div>

          <button
            onClick={calculateProfit}
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded shadow-lg"
          >
            Calculate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeQuickProfit;
