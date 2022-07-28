import Head from "next/head";
import Image from "next/image";

import NextCors from "nextjs-cors";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [themeArr, setThemeArr] = useState([]);

  // const data = fetch("https://cors-anywhere.herokuapp.com/https://github.com/suchmememanyskill/CssLoader-ThemeDb/releases/download/1.0.0/themes.json")
  //   .then((res) => res.json())
  //   .then((data) => setThemeArr(data));

  useEffect(() => {
    setThemeArr([
      {
        id: "4778b3ca1bcd1e7326524f9ea1d5ea41d9fc79ed01d5257c10a8f912e7979764",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/4778b3ca1bcd1e7326524f9ea1d5ea41d9fc79ed01d5257c10a8f912e7979764.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/Party Wumpus/Astolfo Keyboard.jpg",
        name: "Astolfo Keyboard",
        version: "v4.0",
        author: "Party Wumpus",
        last_changed: "2022-07-22T03:11:44+02:00",
        target: "Keyboard",
      },
      {
        id: "c445664fbf24d5fb5bf7b81d103350279b619057ab523634d62af3296943e82d",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/c445664fbf24d5fb5bf7b81d103350279b619057ab523634d62af3296943e82d.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/EMERALD/Centered Home.jpg",
        name: "Centered Home",
        version: "1.0",
        author: "EMERALD#0874",
        last_changed: "2022-07-26T11:52:48-05:00",
        target: "Home",
      },
      {
        id: "7da09e8823c05d021a72998dd9b948cfd124bb299e04186ffb11fec12f5d984b",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/7da09e8823c05d021a72998dd9b948cfd124bb299e04186ffb11fec12f5d984b.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/Clean Gameview.jpg",
        name: "Clean Gameview",
        version: "v1.0",
        author: "SuchMeme",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "Library",
      },
      {
        id: "16652444b3f25912c80a9b277ea48bb9a86c987f666a84c2005c8b31d6113a67",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/16652444b3f25912c80a9b277ea48bb9a86c987f666a84c2005c8b31d6113a67.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/CootMoon/ColoredKeyboard.jpg",
        name: "Colored Keyboard",
        version: "v2.0",
        author: "CootMoon",
        last_changed: "2022-07-27T11:57:17-04:00",
        target: "Keyboard",
      },
      {
        id: "47e57b8f725226771d6f300d02ce55f25a199ab0d4b65810b83b5ebbe3456ea9",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/47e57b8f725226771d6f300d02ce55f25a199ab0d4b65810b83b5ebbe3456ea9.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/ColoredToggles.jpg",
        name: "Colored Toggles",
        version: "v1.2",
        author: "SuchMeme",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "System-Wide",
      },
      {
        id: "0bc7ec2a997860ed0baa8c02fabc90ce2913d24415a8d6c3b122dfc2a067790f",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/0bc7ec2a997860ed0baa8c02fabc90ce2913d24415a8d6c3b122dfc2a067790f.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/Beebles/ColorfulRecent.jpg",
        name: "Colorful Recent",
        version: "v1.0",
        author: "Beebles",
        last_changed: "2022-07-28T03:39:01+02:00",
        target: "Home",
      },
      {
        id: "5353bc772d54542d523c1d77a3d974aecea8e5979b35031c7e1741baaf668119",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/5353bc772d54542d523c1d77a3d974aecea8e5979b35031c7e1741baaf668119.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/Ducky/preview.jpg",
        name: "Ducky's Wallpapers",
        version: "v1.0",
        author: "Ducky/CaSquall",
        last_changed: "2022-07-28T02:01:17+02:00",
        target: "Library",
      },
      {
        id: "477b11812fce9ca17031898f1face8e7e3eed7a56db031870862e81ce6b83a52",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/477b11812fce9ca17031898f1face8e7e3eed7a56db031870862e81ce6b83a52.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/EMERALD/Galactic.jpg",
        name: "Galactic",
        version: "1.0",
        author: "EMERALD#0874",
        last_changed: "2022-07-26T11:51:55-05:00",
        target: "System-Wide",
      },
      {
        id: "682525643fdcbad7cc0e83583031024f865fe080ca034c1afe5db4c7a8780b1c",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/682525643fdcbad7cc0e83583031024f865fe080ca034c1afe5db4c7a8780b1c.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/MoreLibraryIcons.jpg",
        name: "More Library Icons",
        version: "v1.0",
        author: "SuchMeme",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "Library",
      },
      {
        id: "c2a9c8f75a36b6485852fbf7ffd0729326ee21fa59263814d0661e14da45296a",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/c2a9c8f75a36b6485852fbf7ffd0729326ee21fa59263814d0661e14da45296a.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/EMERALD/Obsidian.jpg",
        name: "Obsidian",
        version: "1.0",
        author: "EMERALD#0874",
        last_changed: "2022-07-26T11:51:55-05:00",
        target: "System-Wide",
      },
      {
        id: "2e57732dd33dff7e08fa7df13500ca7c4a9975082279d044917100543956e9a2",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/2e57732dd33dff7e08fa7df13500ca7c4a9975082279d044917100543956e9a2.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/Party Wumpus/RGB keyboard.jpg",
        name: "RGB Keyboard",
        version: "v5.0",
        author: "Party Wumpus",
        last_changed: "2022-07-22T03:11:44+02:00",
        target: "Keyboard",
      },
      {
        id: "8a5ee5d1e3dced9882e79059323b3a0951374ef326348e8a203bea60c9c1a514",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/8a5ee5d1e3dced9882e79059323b3a0951374ef326348e8a203bea60c9c1a514.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/EMERALD/Round.jpg",
        name: "Round",
        version: "1.1",
        author: "EMERALD#0874",
        last_changed: "2022-07-26T12:24:48-05:00",
        target: "System-Wide",
      },
      {
        id: "49c619bbe0c794f91c95665512704a6a2b0fc6a875f85ff752448f18e765a1c9",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/49c619bbe0c794f91c95665512704a6a2b0fc6a875f85ff752448f18e765a1c9.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/CootMoon/RoundedKeyboard.jpg",
        name: "Rounded Keyboard",
        version: "v2.0",
        author: "CootMoon",
        last_changed: "2022-07-28T01:59:09+02:00",
        target: "Keyboard",
      },
      {
        id: "46be6bc50fbd17ca23681b2f8b3d8f8028a226e166618c2d50f7b0deadb6ad36",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/46be6bc50fbd17ca23681b2f8b3d8f8028a226e166618c2d50f7b0deadb6ad36.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/classic.jpg",
        name: "SDH-ClassicTheme",
        version: "v0.2",
        author: "NegativeI0N",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "System-Wide",
      },
      {
        id: "6d9a2710533515fe9ab542599ab0e65cf8849e6d0332e1ebe13ae8dc0eaa1b0c",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/6d9a2710533515fe9ab542599ab0e65cf8849e6d0332e1ebe13ae8dc0eaa1b0c.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/static-background.jpg",
        name: "Static Background",
        version: "v1.0",
        author: "SuchMeme",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "Home",
      },
      {
        id: "43705eea88afe1cc4a990d37cc1208538e82a34bceb4a53ebafdcd16f8ed8d8c",
        download_url:
          "https://s3.eu-central-003.backblazeb2.com/deck-themes/43705eea88afe1cc4a990d37cc1208538e82a34bceb4a53ebafdcd16f8ed8d8c.zip",
        preview_image:
          "https://raw.githubusercontent.com/suchmememanyskill/CssLoader-ThemeDb/main/images/SuchMeme/switchlikehome.jpg",
        name: "Switch Like Home",
        version: "v1.0",
        author: "SuchMeme",
        last_changed: "2022-07-21T18:35:13+02:00",
        target: "Home",
      },
    ]);
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
    <div className='h-full pb-5 w-screen'>
      <Head>
        <title>CssLoader - Theme Browser</title>
      </Head>
      <main className='w-screen flex flex-col items-center justify-center'>
        <div className='flex justify-center p-5'>
          <h1 className='text-5xl font-extrabold text-center'>
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
          <div className='md:px-8'>
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
            .map((e) => {
              return (
                // The outer 2 most divs are the background darkened/blurred image, and everything inside is the text/image/buttons
                <div
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
                    <div
                      className='CssLoader_ThemeBrowser_SingleItem_InstallButtonContainer'
                      style={{
                        width: "245px",
                      }}></div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
