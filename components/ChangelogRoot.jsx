import Link from "next/link";

import { RootMap } from "./ChangelogMaps";

export default function ChangelogRoot({ data: e }) {
  const updateNameStyle = "text-3xl font-semibold";
  const ulstyle = "list-disc pl-10";
  const isSpecial = !!e.hasCustomPage;
  return (
    <article key={`changelog_${e.version}`}>
      <Link href={`/changelog/${e.version}`}>
        <a className={`${updateNameStyle} ${isSpecial ? "underline" : ""}`}>
          {e.version} - {e.name} - {e.date}
        </a>
      </Link>
      <ul className={ulstyle}>
        <RootMap data={e.data} />
      </ul>
    </article>
  );
}
