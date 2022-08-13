import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { theme } from "common/mulTheme";
import createEmotionCache from "common/utils/createEmotionCache";
import "mixins/moment";
import "common/assets/css/globals.css";
import "common/assets/css/layouts/dashboard.css";
import "common/assets/css/layouts/mobile.css";

import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}) => {
    const router = useRouter();

    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                onErrorRetry: (
                    error,
                    key,
                    config,
                    revalidate,
                    { retryCount }
                ) => {
                    // Never retry on 404.
                    if (error?.response?.status === 404) return;
                    // Only retry up to 3 times.
                    if (retryCount >= 3) return;

                    // Retry after 0.5 seconds.
                    setTimeout(() => revalidate({ retryCount }), 500);
                },
                onError: (error) => {
                    if (error?.response?.status == 404) {
                        return router.push({ pathname: "/404" });
                    }
                    return error?.response?.data;
                },
            }}
        >
            {/* <ApolloProvider client={client}> */}
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
            {/* </ApolloProvider> */}
        </SWRConfig>
    );
};

export default MyApp;
