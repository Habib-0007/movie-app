const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-12 h-12">
        <div className="absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="ml-3 text-gray-600">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
