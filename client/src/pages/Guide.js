import React from "react";

const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Managing Your Finances: A Beginner’s Guide
      </h1>

      <p className="text-gray-700 mb-6 text-lg text-center">
        Managing your money doesn’t have to be overwhelming. This guide will
        help you take the first steps toward understanding your finances by
        breaking it into manageable categories.
      </p>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Before You Start
        </h2>
        <p className="text-gray-700 mt-2">
          A budget should be **realistic and flexible**. While it's important to
          set spending limits, be mindful of your habits and adjust as needed.
          Ask yourself:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Could you shop less frequently for skincare products?</li>
          <li>Can you cut back on DoorDash and cook more at home?</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Every dollar saved here is a dollar you can invest in your future. The
          key is **balance**—cutting back without making budgeting feel like a
          punishment.
        </p>
      </section>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 1: List Your Monthly Income
        </h2>
        <p className="text-gray-700 mt-2">
          Start by listing all your sources of income. This includes your
          paycheck(s), side hustles, or any other regular income.
        </p>
      </section>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 2: Identify Your Monthly Expenses
        </h2>
        <p className="text-gray-700 mt-2">
          Break your expenses into three categories:
        </p>

        <h3 className="text-xl font-semibold mt-4 text-gray-800">
          Bills (Non-Negotiables):
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Rent or mortgage</li>
          <li>Utilities</li>
          <li>Insurance</li>
          <li>Loan payments (e.g., car, student loans)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-gray-800">
          Variable Necessities:
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Groceries</li>
          <li>Toiletries</li>
          <li>Household supplies</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 text-gray-800">
          Discretionary Spending:
        </h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Eating out</li>
          <li>Subscriptions (Netflix, Spotify)</li>
          <li>Shopping</li>
          <li>Entertainment (concerts, events)</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 3: Calculate What’s Left
        </h2>
        <p className="text-gray-700 mt-2">
          Subtract your total bills from your monthly income. This leftover
          amount is what you can use for:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Variable Necessities</li>
          <li>Discretionary spending</li>
          <li>Savings and investments</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 4: Prioritize Savings
        </h2>
        <p className="text-gray-700 mt-2">
          Before spending on anything else, prioritize saving at least 20% of
          your income (or what you can realistically afford). Here’s how:
        </p>

        <h3 className="text-xl font-semibold mt-4 text-gray-800">
          Emergency Fund:
        </h3>
        <p className="text-gray-700 mt-2">
          Save 3–6 months of living expenses in a high-yield savings account.
          This acts as a safety net for unexpected situations like medical bills
          or job loss.
        </p>

        <h3 className="text-xl font-semibold mt-4 text-gray-800">Investing:</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>
            Roth IRA or Traditional IRA: Great for long-term retirement savings.
          </li>
          <li>
            Individual Investment Accounts: Useful for medium- to long-term
            goals.
          </li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">
          Step 5: Make It a Habit
        </h2>
        <p className="text-gray-700 mt-2">
          Revisit your budget every month and adjust as needed. Building good
          financial habits takes time, but consistency pays off.
        </p>
      </section>

      <section className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600">Next Steps</h2>
        <p className="text-gray-700 mt-2">
          Eventually, this guide will expand into more detailed resources, such
          as:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>How to choose a high-yield savings account</li>
          <li>Understanding credit cards</li>
          <li>Investing basics for beginners</li>
        </ul>
      </section>
    </div>
  );
};

export default Guide;
