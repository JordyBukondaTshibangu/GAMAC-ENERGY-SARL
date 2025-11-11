import { CheckIcon } from "lucide-react";

function GMCServiceList({
  cases,
}: {
  cases: { category: string; items: string[] }[];
}) {
  return (
    <section className="max-w-7xl w-full mx-auto py:10 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
      {cases.map((item, index) => (
        <div key={index} className="w-full flex flex-col gap-10">
          <h4 className="text-3xl font-medium leading-10 is-style-underlined-heading">
            {item.category}
          </h4>
          <ul className="flex flex-col gap-4 px-5">
            {item.items.map((item, index) => (
              <li
                key={index}
                className="text-lg leading-10 font-normal flex items-center gap-2"
              >
                <CheckIcon size={24} className="text-amber-500 min-w-10" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default GMCServiceList;
