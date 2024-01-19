const axios = require('axios');

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';
async function fetchMeals(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/meal`;
        console.log('Fetching meals');

        // Construct query parameters based on the provided filters
        const queryParams = {};
        if (filters.ID) queryParams.ID = filters.ID;
        if (filters.loadingtype) queryParams.loadingtype = filters.loadingtype;
        if (filters.category) queryParams.category = filters.category;
        if (filters.name) queryParams.name = filters.name;
        if (filters.price) queryParams.price = filters.price;
        if (filters.pricegreater) queryParams.pricegreater = filters.pricegreater;
        if (filters.pricelower) queryParams.pricelower = filters.pricelower;
        if (filters.additive) queryParams.additive = filters.additive;
        if (filters.badges) queryParams.badges = filters.badges;

        const response = await axios.get(endpoint, {
            params: queryParams,
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });

        console.log('Meals fetched successfully');

        if (filters.getNames) {
            // Extract only the names from the response
            const mealNames = response.data.map(meal => meal.name);
            return mealNames;
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching meals:', error);
        throw error;
    }
}
module.exports = { fetchMeals };