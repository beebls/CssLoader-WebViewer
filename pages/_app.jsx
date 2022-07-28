import "../styles/globals.css";

import Link from "next/link";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen h-full flex flex-col w-screen'>
      <div className='bg-gradient-to-br from-zinc-800 to-zinc-900 h-full flex flex-col flex-auto'>
        <Component {...pageProps} />
        <footer className='mt-auto ml-auto pr-4 pb-2'>
          <a
            href='https://beebl.es'
            target='_blank'
            className='font-medium text-zinc-400 text-xl'>
            Made by Beebl.es
          </a>
        </footer>
      </div>
    </div>
  );
}

export default MyApp;
