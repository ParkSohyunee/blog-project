interface Props {
  categories: string[];
  selected: string;
  onClick: (selected: string) => void;
}

export default function PostCategory({ categories, selected, onClick }: Props) {
  return (
    <section className=" flex flex-col gap-4 items-center">
      <p className=" text-lg font-bold">Category</p>
      <ul className="w-20 text-center">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer my-2 hover:text-indigo-500 ${
              selected === category &&
              "text-indigo-700 font-semibold border-b-2 border-indigo-500"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
