"use client";
 
import React from "react";
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";


export default function AppWalletProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
   
    return (
        <TonConnectUIProvider
            manifestUrl="https://app.touchswap.xyz/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            walletsListConfiguration={{
            includeWallets: [
                {
                appName: "safepalwallet",
                name: "SafePal",
                imageUrl: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
                tondns: "",
                aboutUrl: "https://www.safepal.com",
                universalLink: "https://link.safepal.io/ton-connect",
                deepLink: "safepal-tc://",
                jsBridgeKey: "safepalwallet",
                bridgeUrl: "https://ton-bridge.safepal.com/tonbridge/v1/bridge",
                platforms: ["ios", "android", "chrome", "firefox"]
                },
                {
                appName: "bitgetTonWallet",
                name: "Bitget Wallet",
                imageUrl: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget%20wallet_logo_iOS.png",
                aboutUrl: "https://web3.bitget.com",
                deepLink: "bitkeep://",
                jsBridgeKey: "bitgetTonWallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["ios", "android", "chrome"],
                universalLink: "https://bkcode.vip/ton-connect"
                },
                {
                appName: "tonwallet",
                name: "TON Wallet",
                imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                universalLink: "https://wallet.ton.org/ton-connect",
                jsBridgeKey: "tonwallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["chrome", "android"]
                }
            ]
            }}
            actionsConfiguration={{
                twaReturnUrl: 'https://t.me/touchswap_bot'
            }}
        >
          {children}
        </TonConnectUIProvider>
    );
  }