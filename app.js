const form = document.querySelector('#coinform');
const res = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ctype = form.elements.coin.value;
    fetchPrice(ctype);
});

const fetchPrice = async (ctype) => {
    try {
        const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${ctype}&vs_currencies=usd`;
        const response = await axios.get(apiUrl);

        const priceData = response.data[ctype];

        const price = priceData.usd.toFixed(2);
        const volume = "";
        const change = "";
        const base = ctype;
        const target = 'USD';
        const time = "";

        res.innerHTML = `$${price}`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
