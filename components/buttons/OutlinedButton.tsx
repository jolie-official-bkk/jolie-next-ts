type PropsType = {
  children: string;
};

function OutlinedButton({ children }: PropsType) {
  return (
    <button
      type="button"
      className="text-white bg-purple-700 hover:bg-purple-800 font-medium text-sm w-28 py-2.5 my-2.5 mb-2 rounded-full text-center"
    >
      {children}
    </button>
    // <div className="w-28 justify-center bg-red-50">
    // </div>
  );
}

export default OutlinedButton;
