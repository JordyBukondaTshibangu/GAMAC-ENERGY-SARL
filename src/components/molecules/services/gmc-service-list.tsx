type Group = { title: string; items: string[] };
export type ServiceCategory = { title: string; groups: Group[] };

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-3.5 text-[17px] leading-relaxed text-text/85">
          <span className="mt-[0.7em] h-[2px] w-3 shrink-0 bg-flame" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Detailed scope of a service: category title on the left, scope on the right. */
function GMCServiceList({ categories }: { categories: ServiceCategory[] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x flex flex-col gap-20 md:gap-28">
        {categories.map((cat) => {
          const subdivided = cat.groups.filter((g) => g.title).length > 1;
          return (
            <div key={cat.title} className="grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h2 className="heading border-t-2 border-ink pt-5 text-[28px] text-ink lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                  {cat.title}
                </h2>
              </div>
              <div
                className={`lg:col-span-8 ${
                  subdivided ? "grid gap-x-12 gap-y-10 md:grid-cols-2" : "flex flex-col gap-8"
                }`}
              >
                {cat.groups.map((g, i) => (
                  <div key={g.title || i}>
                    {g.title && (
                      <h3 className="heading mb-2 text-[19px] text-ink">{g.title}</h3>
                    )}
                    <ItemList items={g.items} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GMCServiceList;
