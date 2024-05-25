import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useEffect, type FC, useMemo} from 'react';
import axios from 'axios';
import {
  SDKProvider,
  retrieveLaunchParams,
  useBackButton,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  isSSR,
} from '@tma.js/sdk-react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useRouter } from 'next/router';
import { useRouter as useNavigationRouter } from 'next/navigation';

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

const BackButtonManipulator: FC = () => {
  const router = useRouter();
  const { back } = useNavigationRouter();
  const bb = useBackButton(true);

  useEffect(() => {
    if (!bb) {
      return;
    }
    if (router.pathname === '/') {
      bb.hide();
    } else {
      bb.show();
    }
  }, [router, bb]);

  useEffect(() => {
    return bb && bb.on('click', back);
  }, [bb, back]);

  return null;
};


const App: FC<AppProps> = ({ pageProps, Component }) => {
  const miniApp = useMiniApp(true);
  const themeParams = useThemeParams(true);
  const viewport = useViewport(true);

  useEffect(() => {
    return miniApp && themeParams && bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return themeParams && bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  return (
    <>
      <BackButtonManipulator/>
      <>
        <main className="relative bgcover overflowxhidden" style={{ background: `url('/img/stars.svg')` }}>
          <Component {...pageProps} />
        </main>
        <Toaster />
      </>
    </>
  );
};

const Inner: FC<AppProps> = (props) => {
  const debug = useMemo(() => {
    return isSSR() ? false : retrieveLaunchParams().startParam === 'debug';
  }, []);
  
  useEffect(() => {
    if (debug) {
      import('eruda').then(lib => lib.default.init());
    }
  }, [debug]);

  return (
      <SDKProvider acceptCustomStyles debug={debug}>
        <App {...props}/>
      </SDKProvider>
  );
};



export default function CustomApp(props: AppProps) {
  //const [isHashValid, setIsHashValid] = useState(false);
  // // const initData = useTelegramInitData();
  // useEffect(() => {
  //   //console.log(window)
  //   // if(initData.user !== null){
  //   //   axios
  //   //     .post('/api/validateHash', { hash: window.Telegram.WebApp.initData })
  //   //     .then(response => setIsHashValid(response.status === 200))
  //   //     .catch(()=>setIsHashValid(false) );
  //   //   }
  // }, []);

  // // if (!isHashValid) {
  // //   return null;
  // // }
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <Inner {...props}/>
  </ErrorBoundary>
  );
}
