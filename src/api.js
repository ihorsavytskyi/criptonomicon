const API_KEY = 
'81d1aa45d0c0e961632cf00d6a2531f11c759ea149a24ab263850ba097b30ce7';

//TODO: refactor to use URLSearchParamas
export const loadTicker = ticker => 
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
    ).ther(r => r.json());