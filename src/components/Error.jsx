const Error = ({ children }) => {
  return (
    <div className="bg-red-800 p-3 text-center mb-3 rounded-md text-white font-bold uppercase">
      {children}
    </div>
  );
};

export default Error;
