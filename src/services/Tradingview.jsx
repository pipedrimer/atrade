import { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    // Ensure the widget container is empty before appending the script
    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.innerHTML = ''; // Clear any existing content
    }

    // Create and append the script only once
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
        { description: 'Ripple', proName: 'BINANCE:XRPUSDT' },
        { description: 'Solana', proName: 'COINBASE:SOLUSD' },
        { description: 'Tesla', proName: 'NASDAQ:TSLA' },
        { description: 'Nvidia', proName: 'NASDAQ:NVDA' },
        { description: 'Amazon', proName: 'NASDAQ:AMZN' },
        { description: 'Meta', proName: 'NASDAQ:META' },
        { description: 'Apple', proName: 'NASDAQ:AAPL' },
        { description: 'GBP to USD', proName: 'FX:GBPUSD' },
        { description: 'USD to JPY', proName: 'FX:USDJPY' },
        { description: 'DogeCoin', proName: 'BINANCE:DOGEUSDT' },
        { description: 'Microstrategy', proName: 'NASDAQ:MSTR' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en',
    });
    container.appendChild(script);

    return () => {
      
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
