export function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      {/* Another place where bg-night doesn't work, so I hardcoded its color: */}
      <div
        className={`dark:bg-night shadow-lgtransform fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-[#0d1120] bg-white p-5 transition duration-300 dark:bg-[#0d1120] md:w-[50%] lg:w-[35%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 font-bold text-black dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
      )}
    </div>
  );
}
