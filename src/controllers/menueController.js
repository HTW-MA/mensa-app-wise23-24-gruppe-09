const axios = require("axios");

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';
async function fetchMenue(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/menue`;
        console.log('Fetching menue');
        const response = await axios.get(endpoint, {
            params: filters,
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });
        console.log('menue fetched successfully');
        return response.data;
    } catch (error) {
        console.error('Error fetching Menue:', error);
        throw error;
    }
}

module.exports = { fetchMenue };