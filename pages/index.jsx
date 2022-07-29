import Head from "next/head";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [themeArr, setThemeArr] = useState([]);

  async function getThemes() {
    fetch(
      "https://raw.githubusercontent.com/beebls/CssLoader-ThemeDb-Mirror/main/themes.json"
    )
      .then((res) => res.json())
      .then((data) => setThemeArr(data));
  }

  useEffect(() => {
    getThemes();
  }, []);

  const sortOptions = useMemo(
    () => [
      { data: 1, label: "Name: A-Z" },
      { data: 2, label: "Name: Z-A" },
      { data: 3, label: "Date: Newest-Oldest" },
      { data: 4, label: "Date: Oldest-Newest" },
    ],
    []
  );

  const [selectedSort, setSort] = useState(1);
  const [searchFieldValue, setSearch] = useState("");
  const [selectedTarget, setTarget] = useState({
    data: 1,
    label: "Any",
  });

  const searchFilter = (e) => {
    // This filter just implements the search stuff
    if (searchFieldValue.length > 0) {
      if (
        // Convert the theme name and search to lowercase so that it's not case-sensitive
        !e.name.toLowerCase().includes(searchFieldValue.toLowerCase())
      ) {
        // return false just means it won't show in the list
        return false;
      }
    }
    return true;
  };

  const targetOptions = useMemo(() => {
    const uniqueTargets = new Set(
      themeArr.filter(searchFilter).map((e) => e.target)
    );
    return [
      { data: 1, label: "Any" },
      ...[...uniqueTargets].map((e, i) => ({ data: i + 2, label: e })),
    ];
  }, [themeArr, searchFilter]);

  return (
    <div className='h-full pb-5'>
      <Head>
        <title>CssLoader - Theme Browser</title>
      </Head>
      <main className='flex flex-col items-center justify-center'>
        <div className='flex justify-center p-5 flex-col items-center'>
          <h1 className='text-3xl md:text-5xl font-extrabold text-center'>
            CssLoader Theme Browser
          </h1>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center pb-10'>
          <input
            value={searchFieldValue}
            onInput={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Search'
            className='bg-gradient-to-tl from-zinc-700 to-zinc-500 px-5 py-2 rounded-3xl border-slate-800 shadow-lg text-zinc-900 placeholder:text-zinc-900 placeholder:text-center placeholder:text-lg caret-zinc-200'
          />
          <div className='md:px-8 py-4 md:py-0'>
            <span className='font-bold pr-4'>Sort By:</span>
            <select
              onChange={(e) => setSort(Number(e.target.value))}
              className='text-black'>
              {sortOptions.map((e) => (
                <option value={e.data} key={`SortOption${e.label}`}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span className='font-bold pr-4'>Theme Type:</span>
            <select
              onChange={(e) => {
                setTarget(targetOptions[e.target.value - 1]);
              }}
              className='text-black'>
              {targetOptions.map((e) => (
                <option value={e.data} key={`TargetOption${e.label}`}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {typeof window !== undefined ? (
          <>
            <div className='flex flex-wrap items-center justify-center'>
              {themeArr
                .filter(searchFilter)
                .sort((a, b) => {
                  // This handles the sort option the user has chosen
                  // 1: A-Z, 2: Z-A, 3: New-Old, 4: Old-New
                  switch (selectedSort) {
                    case 2:
                      // localeCompare just sorts alphabetically
                      return b.name.localeCompare(a.name);
                    case 3:
                      return (
                        new Date(b.last_changed).valueOf() -
                        new Date(a.last_changed).valueOf()
                      );
                    case 4:
                      return (
                        new Date(a.last_changed).valueOf() -
                        new Date(b.last_changed).valueOf()
                      );
                    default:
                      // This is just A-Z
                      return a.name.localeCompare(b.name);
                  }
                })
                .filter((e) =>
                  selectedTarget.label === "Any"
                    ? true
                    : e.target === selectedTarget.label
                )
                .map((e, i) => {
                  console.log(e);
                  return (
                    // The outer 2 most divs are the background darkened/blurred image, and everything inside is the text/image/buttons
                    <>
                      <article
                        key={`Theme_${e.name}`}
                        className='CssLoader_ThemeBrowser_SingleItem_BgImage md:w-[260px] w-full'
                        style={{
                          backgroundImage: 'url("' + e.preview_image + '")',
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          borderRadius: "5px",
                          marginLeft: "10px",
                          marginRight: "10px",
                          marginBottom: "20px",
                        }}>
                        <div
                          className='CssLoader_ThemeBrowser_SingleItem_BgOverlay'
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            background: "RGBA(0,0,0,0.8)",
                            backdropFilter: "blur(5px)",
                            width: "100%",
                            height: "100%",
                            borderRadius: "3px",
                          }}>
                          <span
                            className='CssLoader_ThemeBrowser_SingleItem_ThemeName'
                            style={{
                              marginTop: "5px",
                              fontSize: "1.5em",
                              fontWeight: "bold",
                            }}>
                            {e.name}
                          </span>
                          {selectedTarget.label === "Any" && (
                            <span
                              className='CssLoader_ThemeBrowser_SingleItem_ThemeTarget'
                              style={{
                                marginTop: "-6px",
                                fontSize: "1em",
                                textShadow: "rgb(48, 48, 48) 0px 0 10px",
                              }}>
                              {e.target}
                            </span>
                          )}
                          <div
                            className='CssLoader_ThemeBrowser_SingleItem_PreviewImage'
                            style={{
                              width: "240px",
                              backgroundImage: 'url("' + e.preview_image + '")',
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              height: "150px",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          />
                          <div
                            className='CssLoader_ThemeBrowser_SingleItem_AuthorVersionContainer'
                            style={{
                              width: "240px",
                              textAlign: "center",
                              display: "flex",
                            }}>
                            <span
                              className='CssLoader_ThemeBrowser_SingleItem_AuthorText'
                              style={{
                                marginRight: "auto",
                                fontSize: "1em",
                                textShadow: "rgb(48, 48, 48) 0px 0 10px",
                              }}>
                              {e.author}
                            </span>
                            <span
                              className='CssLoader_ThemeBrowser_SingleItem_VersionText'
                              style={{
                                marginLeft: "auto",
                                fontSize: "1em",
                                textShadow: "rgb(48, 48, 48) 0px 0 10px",
                              }}>
                              {e.version}
                            </span>
                          </div>
                          <div>
                            <a
                              onClick={() => window.open(e.source)}
                              className='cursor-pointer text-xl text-[rgba(255,255,255,0.6)]'>
                              View Source
                            </a>
                          </div>
                          <div
                            className='CssLoader_ThemeBrowser_SingleItem_InstallButtonContainer'
                            style={{
                              width: "245px",
                            }}></div>
                        </div>
                      </article>
                    </>
                  );
                })}
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}

        <div className='pb-2 text-2xl'>
          <span
            className='cursor-pointer text-sky-400 hover:text-emerald-400 transition-colors'
            onClick={() => getThemes()}>
            Reload Themes
          </span>
        </div>
        <div className='flex flex-col md:flex-row text-xl text-center'>
          <a
            className='cursor-pointer text-zinc-400 hover:text-sky-400 underline transition-colors'
            onClick={() =>
              window.open("https://github.com/suchmememanyskill/SDH-CssLoader")
            }>
            CssLoader Github
          </a>
          <div className='px-0 md:px-5' />
          <a
            className='cursor-pointer text-zinc-400 hover:text-sky-400 underline transition-colors'
            onClick={() =>
              window.open(
                "https://github.com/suchmememanyskill/CssLoader-ThemeDb"
              )
            }>
            Theme Database Github
          </a>
        </div>
      </main>
    </div>
  );
}
