const axios = require("axios");

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';
async function fetchMenue(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/menue`;
        console.log('Fetching menue');

        // Construct query parameters based on the provided filters
        const queryParams = {};
        if (filters.loadingtype) queryParams.loadingtype = filters.loadingtype;
        if (filters.canteenId) queryParams.canteenId = filters.canteenId;
        if (filters.startdate) queryParams.startdate = filters.startdate;
        if (filters.enddate) queryParams.enddate = filters.enddate;

        const response = await axios.get(endpoint, {
            params: queryParams,
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

async function fetchSpecificMenueInfo(filters) {
    try {
        const response = await fetchMenue(filters);

        // Check if response is an array of menus
        if (!Array.isArray(response)) {
            console.error('Invalid response format:', response);
            throw new Error('Invalid response format');
        }

        const specificMenueInfo = [];

        // Iterate over each menu
        response.forEach(menu => {
            // Check if meals array is present in the menu
            if (menu.meals && Array.isArray(menu.meals)) {
                // Process each meal in the menu
                menu.meals.forEach(menuItem => {
                    // Check if prices, additives, and badges arrays are defined
                    const prices = menuItem.prices && Array.isArray(menuItem.prices)
                        ? menuItem.prices.map(price => ({
                            priceType: price.priceType,
                            price: price.price,
                        }))
                        : [];

                    const additives = menuItem.additives && Array.isArray(menuItem.additives)
                        ? menuItem.additives.map(additive => additive.text)
                        : [];

                    const badges = menuItem.badges && Array.isArray(menuItem.badges)
                        ? menuItem.badges.map(badge => badge.name)
                        : [];

                    // Add the processed meal details to specificMenueInfo array
                    specificMenueInfo.push({
                        date: menu.date,
                        mealName: menuItem.name,
                        prices,
                        category: menuItem.category,
                        additives,
                        badges,
                    });
                });
            }
        });

        return specificMenueInfo;
    } catch (error) {
        console.error('Error fetching specific menu info:', error);
        throw error;
    }
}

module.exports = { fetchMenue, fetchSpecificMenueInfo };