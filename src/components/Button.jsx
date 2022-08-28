export const Button001 = ({ children }) => {
  return <div className="cursor p-3 px-4 hover:border-b ">{children}</div>;
};

export const Button002 = ({ children }) => {
  return (
    <div>
      <div className="font-[500] max-w-max cursor bg-[#e2b887] text-[#00302e] p-3 px-4 rounded-lg mx-2 hover:text-white hover:bg-[#a38563]">
        {children}
      </div>
    </div>
  );
};

export const Button003 = ({ children }) => {
  return (
    <div>
      <div className="font-[500] max-w-max cursor bg-[#e2b887] text-[#00302e] p-3 px-4 rounded-lg hover:text-white hover:bg-[#a38563] ease-in-out delay-150">
        {children}
      </div>
    </div>
  );
};
