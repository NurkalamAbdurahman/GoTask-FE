export const LoadingSpinner = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <svg
          className="animate-spin h-5 w-5 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="mt-2 text-blue-600 font-medium animate-pulse">
          Loading data...
        </p>
      </div>
    );
  };
  