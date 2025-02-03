const Home = ({ message }) => {
  return (
    <div className="text-center">
      {/* This message will be removed later when no longer needed */}
      {message && <h1 className="text-lg text-gray-600">{message}</h1>}

      <h2 className="text-4xl font-bold text-gray-900 mt-4">
        Welcome to the YDNB
      </h2>
      <p className="text-lg text-gray-700">
        Start managing your budget wisely!
      </p>
    </div>
  );
};

export default Home;
