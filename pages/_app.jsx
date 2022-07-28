import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full flex flex-col overflow-x-hidden'>
      <div className='bg-gradient-to-br from-zinc-800 to-zinc-900 h-full flex flex-col flex-auto'>
        <Component {...pageProps} />
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
