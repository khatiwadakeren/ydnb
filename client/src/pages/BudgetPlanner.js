import { useState } from "react";

const BudgetPlanner = () => {
  const [incomeSources, setIncomeSources] = useState([
    { source: "", amount: "" },
  ]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    bills: [{ name: "", amount: "" }],
    variable: [{ name: "", amount: "" }],
    discretionary: [{ name: "", amount: "" }],
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate total income dynamically
  const calculateTotalIncome = () => {
    const total = incomeSources.reduce(
      (acc, item) => acc + Number(item.amount || 0),
      0
    );
    setTotalIncome(total);
  };

  // Calculate total for each expense category
  const calculateCategoryTotal = (type) => {
    return expenses[type]
      .reduce((acc, item) => acc + Number(item.amount || 0), 0)
      .toFixed(2);
  };

  // Handle income input changes
  const handleIncomeChange = (index, field, value) => {
    const updatedSources = [...incomeSources];
    updatedSources[index][field] = value;
    setIncomeSources(updatedSources);
    calculateTotalIncome();
  };

  // Add a new income source only if the last one is filled
  const addIncomeSource = () => {
    if (
      incomeSources[incomeSources.length - 1].source &&
      incomeSources[incomeSources.length - 1].amount
    ) {
      setIncomeSources([...incomeSources, { source: "", amount: "" }]);
    }
  };

  // Remove an income source
  const removeIncomeSource = (index) => {
    const updatedSources = incomeSources.filter((_, i) => i !== index);
    setIncomeSources(updatedSources);
    calculateTotalIncome();
  };

  // Add expense category only if the last one is filled
  const addExpense = (type) => {
    if (
      expenses[type][expenses[type].length - 1].name &&
      expenses[type][expenses[type].length - 1].amount
    ) {
      setExpenses({
        ...expenses,
        [type]: [...expenses[type], { name: "", amount: "" }],
      });
    }
  };

  // Remove expense category
  const removeExpense = (type, index) => {
    const updatedExpenses = expenses[type].filter((_, i) => i !== index);
    setExpenses({ ...expenses, [type]: updatedExpenses });
  };

  // Handle expense input changes
  const handleExpenseChange = (type, index, field, value) => {
    const updatedExpenses = [...expenses[type]];
    updatedExpenses[index][field] = value;
    setExpenses({ ...expenses, [type]: updatedExpenses });
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Budget Planner
      </h1>

      {/* Income Input Section */}
      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 1: Enter Your Income
        </h2>
        {incomeSources.map((entry, index) => (
          <div key={index} className="flex gap-4 mt-2 items-center">
            <input
              type="text"
              placeholder="Source (e.g., Salary, Side Hustle)"
              value={entry.source}
              onChange={(e) =>
                handleIncomeChange(index, "source", e.target.value)
              }
              className="border p-2 rounded w-1/3"
            />
            <input
              type="number"
              placeholder="Amount"
              value={entry.amount}
              onChange={(e) =>
                handleIncomeChange(index, "amount", e.target.value)
              }
              className="border p-2 rounded w-1/3"
            />
            {index > 0 && (
              <button
                onClick={() => removeIncomeSource(index)}
                className="text-red-500"
              >
                ❌
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addIncomeSource}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Income Source
        </button>
        <p className="mt-4 font-semibold">
          Total Income: ${totalIncome.toFixed(2)}
        </p>
      </section>

      {/* Expenses Section */}
      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 2: Enter Your Expenses
        </h2>
        {Object.keys(expenses).map((type) => (
          <div key={type} className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
            {expenses[type].map((expense, index) => (
              <div key={index} className="flex gap-4 mt-2 items-center">
                <input
                  type="text"
                  placeholder="Expense Name"
                  value={expense.name}
                  onChange={(e) =>
                    handleExpenseChange(type, index, "name", e.target.value)
                  }
                  className="border p-2 rounded w-1/2"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  value={expense.amount}
                  onChange={(e) =>
                    handleExpenseChange(type, index, "amount", e.target.value)
                  }
                  className="border p-2 rounded w-1/3"
                />
                {index > 0 && (
                  <button
                    onClick={() => removeExpense(type, index)}
                    className="text-red-500"
                  >
                    ❌
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addExpense(type)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              + Add {type.charAt(0).toUpperCase() + type.slice(1)} Expense
            </button>
            <p className="mt-2 font-semibold">
              Total {type.charAt(0).toUpperCase() + type.slice(1)}: $
              {calculateCategoryTotal(type)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BudgetPlanner;
