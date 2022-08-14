import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { calcMinVersion } from "../../logic/calcMinVersion";

export default function ExpandedView() {
  const router = useRouter();
  const { id } = router.query;

  const [currentExpandedTheme, setTheme] = useState(undefined);
  const [invalid, setInvalid] = useState(false);

  async function getTheme() {
    fetch(
      "https://raw.githubusercontent.com/beebls/CssLoader-ThemeDb-Mirror/main/themes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          const themeObj = data.find(
            (e) => e.id.slice(0, 9) === id.slice(0, 9)
          );
          if (themeObj !== undefined) {
            setTheme(themeObj);
            setInvalid(false);
          } else {
            setInvalid(true);
          }
        }
      });
  }

  useEffect(() => {
    getTheme();
  }, [id]);

  if (invalid) {
    return (
      <>
        <Head>
          <title>CSSLoader - Invalid Theme</title>
        </Head>
        <div className='font-bold flex items-center justify-center text-rose-400 text-4xl'>
          <span>Invalid Theme ID</span>
        </div>
      </>
    );
  }

  if (currentExpandedTheme) {
    return (
      // The outermost div is to push the content down into the visible area
      <>
        <Head>
          <title>CSSLoader - {currentExpandedTheme.name}</title>
        </Head>
        <main>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "20px",
            }}>
            <div className='mb-2 flex flex-col md:flex-row'>
              <img
                className='CssLoader_ThemeBrowser_ExpandedView_PreviewImage w-full md:w-3/5'
                src={currentExpandedTheme.preview_image}
              />
              <div className='w-full ml-0 md:ml-4'>
                <div
                  style={{
                    marginBottom: "8px",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <span style={{ fontWeight: "bold", fontSize: "2em" }}>
                    {currentExpandedTheme.name}
                  </span>
                  <span>
                    <b>Author:</b> {currentExpandedTheme.author}
                  </span>
                  <span>
                    <b>Theme Target:</b> {currentExpandedTheme.target}
                  </span>
                  <span>
                    <b>Version:</b> {currentExpandedTheme.version}
                  </span>
                  <span>
                    <b>Minimum CSSLoader Version:</b>{" "}
                    {calcMinVersion(currentExpandedTheme.manifest_version)}
                  </span>
                  <div className='mt-2'>
                    {currentExpandedTheme?.description ? (
                      <p className='text-gray-400'>
                        {currentExpandedTheme.description}
                      </p>
                    ) : (
                      <p className='text-gray-500 italic'>
                        No description provided.
                      </p>
                    )}
                  </div>
                  <div className='mt-2'>
                    <a
                      href={currentExpandedTheme.source}
                      className='text-cyan-100 text-xl'>
                      View Source
                    </a>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>CSSLoader - Loading Theme</title>
      </Head>
      <div className='font-bold flex items-center justify-center text-cyan-400 text-4xl'>
        <span>Loading...</span>
      </div>
    </>
  );
}
