const API_KEY = 
'81d1aa45d0c0e961632cf00d6a2531f11c759ea149a24ab263850ba097b30ce7';

//TODO: refactor to use URLSearchParamas
export const loadTickers = ticker => 
    fetch(
        `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${ticker.join(
        ","
        )}&api_key=${API_KEY}`
    )
    .then(r => r.json())
    .then(rawData => {
        Object.fromEntries(
            Object.entries(rawData).map(([key, value]) => [key, 1 / value])
        )
    });