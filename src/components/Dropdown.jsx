export function Dropdown({ isOpen, children }) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-[400px] rounded-md bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-gray-800 shadow-lg">
      <div className="p-4">{children}</div>
    </div>
  );
}
