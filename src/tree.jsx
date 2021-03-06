const names = [
  "Wookies",
  "Hats",
  "Bananas",
  "Nick Cage Movies",
  "Guys named Fred",
  "Dreams about flying",
  "Homework",
  "Juice",
  "Musicals",
  "Western Bears",
  "Steve",
  "Granola",
  "Chunks",
  "Fruity",
];

const samples = {
  category: {
    object_name: "Category",
    data_provider_key: "bluekai",
    object_key: "bluekai-31",
    object_type: "category",
  },

  segment: {
    object_name: "Segment",
    data_provider_key: "bluekai",
    object_key: "bluekai-1145",
    object_type: "segment",
    cpm_cost: 2.5,
  },
};

// generate mock response data
const fakeData = (type) => {
  const n = [...names];
  // pick a random name from the list
  const getName = () => n.splice(Math.floor(Math.random() * n.length), 1)[0];

  return Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
    ...samples[type],
    object_name: getName(),
  }));
};

const mockApiRequest = (type) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(fakeData(type)), 200);
  });

const load = async (parentKey) => {
  const [categories, segments] = await Promise.all([
    mockApiRequest("category"),
    mockApiRequest("segment"),
  ]);

  return [...categories, ...segments];
};

const Category = ({ item }) => {
  const [data, setData] = React.useState();
  const onClick = data
    ? () => setData(null)
    : () => load(item.object_key).then(setData);

  return (
    <div className="category">
      <div className={`category-name ${data ? "open" : ""}`} onClick={onClick}>
        {item.object_name}
      </div>
      {data && (
        <ul>
          {data.map((child, i) => (
            <li key={i}>
              <Node item={child} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Segment = ({ item: { object_name } }) => (
  <div className="segment">{object_name}</div>
);

const Node = ({ item }) => {
  const Cmp = item.object_type === "category" ? Category : Segment;
  return <Cmp item={item} />;
};

ReactDOM.render(
  <Category item={samples.category} />,
  document.querySelector("#app")
);
