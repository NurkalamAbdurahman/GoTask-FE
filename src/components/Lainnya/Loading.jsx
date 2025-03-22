export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="animate-spin h-12 w-12 border-4 border-t-4 border-blue-600 border-t-transparent rounded-full"></div>
      <p className="mt-2 text-blue-600 font-semibold text-sm">
        Loading...
      </p>
    </div>
  );
};