import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);
  const scriptLoaded = useRef(false); // Prevent multiple script injections

  useEffect(() => {
    if (scriptLoaded.current) return; // Prevent multiple renders

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      symbolsGroups: [
        {
          name: "forex",
          symbols: [
            { name: "BINANCE:BTCUSDT", displayName: "Bitcoin" },
            { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
            { name: "BINANCE:SOLUSDT", displayName: "Solana" },
            { name: "FX:GBPUSD", displayName: "GBP to USD" },
            { name: "FX:EURUSD", displayName: "EUR to USD" },
            { name: "OANDA:USDJPY", displayName: "USD to JPY" },
            { name: "OANDA:USDCAD", displayName: "USD to CAD" },
            { name: "FX:EURJPY", displayName: "EUR to JPY" },
            { name: "NASDAQ:TSLA", displayName: "Tesla" },
            { name: "NASDAQ:NVDA", displayName: "Nvidia" },
            { name: "NASDAQ:AMZN", displayName: "Amazon" },
            { name: "NASDAQ:META", displayName: "Meta" },
            { name: "NASDAQ:AAPL", displayName: "Apple" },
            { name: "NASDAQ:GOOG", displayName: "Google" }
          ]
        }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "light",
      locale: "en"
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
      scriptLoaded.current = true; // Mark script as loaded
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
