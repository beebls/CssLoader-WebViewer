const ulstyle = "list-disc pl-10";
const updateTypeContainerTitle = "text-xl font-medium";

export function ArrayMap({ arr }) {
  return arr.map((f, j) => {
    if (typeof f === "object") {
      return (
        <ul className={ulstyle} key={`changelog_nestContainer_${j}`}>
          <ArrayMap arr={f} />
        </ul>
      );
    } else {
      return <li key={`changelog_${f}`}>{f}</li>;
    }
  });
}

export function CategoryMap({ name, data }) {
  return (
    <li>
      <h3 className={updateTypeContainerTitle}>{name}</h3>
      <ul className={ulstyle}>
        <ArrayMap arr={data} />
      </ul>
    </li>
  );
}

export function RootMap({ data }) {
  return data.map((f, j) => {
    if (typeof f === "object") {
      return (
        <ul className={ulstyle} key={`changelog_nestContainer_${j}`}>
          <ArrayMap arr={f} />
        </ul>
      );
    } else {
      return (
        <li key={`changelog_${f}`} className={updateTypeContainerTitle}>
          {f}
        </li>
      );
    }
  });
}
