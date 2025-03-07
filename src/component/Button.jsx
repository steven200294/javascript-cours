export default function Button({ children }) {
  return (
    <button className="w-60 h-12  rounded-full  bg-red-500   text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-4xl ">
      {children}{' '}
    </button>
  );
}
