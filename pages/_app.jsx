import "../styles/globals.css";

import Link from "next/link";

import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [themeArr, setThemeArr] = useState([]);

  const [selectedSort, setSort] = useState(1);
  const [searchFieldValue, setSearch] = useState("");
  const [selectedTarget, setTarget] = useState({
    data: 1,
    label: "Any",
  });

  return (
    <div className='min-h-screen h-full flex flex-col overflow-x-hidden'>
      <div className='bg-gradient-to-br from-zinc-800 to-zinc-900 h-full flex flex-col flex-auto'>
        <div className='flex justify-center p-5 flex-col items-center'>
          <Link href='/'>
            <a className='text-3xl md:text-5xl font-extrabold text-center'>
              CssLoader Theme Browser
            </a>
          </Link>
        </div>
        <Component
          {...pageProps}
          themeArr={themeArr}
          setThemeArr={setThemeArr}
          selectedSort={selectedSort}
          setSort={setSort}
          searchFieldValue={searchFieldValue}
          setSearch={setSearch}
          selectedTarget={selectedTarget}
          setTarget={setTarget}
        />
        <footer className='mt-auto ml-auto pr-4 pb-2'>
          <a
            href='https://beebl.es'
            target='_blank'
            className='font-medium text-xl transition-all bg-clip-text bg-gradient-to-tl from-zinc-400 to-zinc-200 text-transparent'>
            Site by Beebl.es
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
