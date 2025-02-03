const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Financial Guide</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">📖 Introduction</h2>
        <p className="text-gray-700 mt-2">
          Learning to manage your finances is a crucial life skill. While it's
          never too late to start, the sooner you start, the better.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">💰 Budgeting Basics</h2>
        <p className="text-gray-700 mt-2">
          Budgeting involves tracking your income and expenses. A popular method
          to follow is the <strong>50/30/20 Rule</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            <strong>50%</strong> - Essentials (Rent, Food, Utilities)
          </li>
          <li>
            <strong>30%</strong> - Wants (Entertainment, Shopping, Travel)
          </li>
          <li>
            <strong>20%</strong> - Savings & Investments
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          However, this is not a strict rule and you can adjust it to your
          needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">
          📊 Creating Your First Budget
        </h2>
        <p className="text-gray-700 mt-2">
          Follow these steps to build a simple budget:
        </p>
        <ol className="list-decimal list-inside mt-2 text-gray-700">
          <li>List all your sources of income.</li>
          <li>Identify and categorize expenses.</li>
          <li>Adjust spending to ensure you are saving at least 20%.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">📉 Debt Management</h2>
        <p className="text-gray-700 mt-2">
          If you have debt, prioritize paying it off using methods like:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            <strong>Snowball Method:</strong> Pay off the smallest debt first to
            build momentum.
          </li>
          <li>
            <strong>Avalanche Method:</strong> Pay off the highest-interest debt
            first to save money over time.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">📈 Saving & Investing</h2>
        <p className="text-gray-700 mt-2">
          An emergency fund should cover at least 3-6 months of expenses. Once
          that’s set, consider beginner-friendly investments like index funds.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">🛒 Smart Spending Habits</h2>
        <p className="text-gray-700 mt-2">
          Make intentional purchases and cut unnecessary expenses by:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Tracking your spending</li>
          <li>Using cashback apps</li>
          <li>Setting a 24-hour rule before big purchases</li>
        </ul>
      </section>
    </div>
  );
};

export default Guide;
