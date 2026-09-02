type SearchBarProps = {
  searchText: string;
  onSearchChange: (text: string) => void;
};

export default function SearchBar({
  searchText,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="mx-auto my-6 w-full px-4">
      <label htmlFor="product-search"></label>
      <input
        type=" search"
        id="search"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        className="mx-auto block w-full max-w-xl rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 transition outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 md:max-w-2xl"
        placeholder="Search iPhone, Samsung, Macbook...
                 "
      />
    </div>
  );
}
