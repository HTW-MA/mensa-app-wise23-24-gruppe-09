
// mensaController.js


const axios = require('axios');

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';

async function fetchMensas(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/canteen`;
        console.log('Fetching mensas');

        // Construct query parameters based on the provided filters
        const queryParams = {};
        // ID funktioniert nicht, warum weiß ich nicht
        if (filters.ID) queryParams.ID = filters.ID;
        if (filters.loadingtype) queryParams.loadingtype = filters.loadingtype;
        // name funktioniert
        if (filters.name) queryParams.name = filters.name;
        // zipcode funktioniert
        if (filters.zipcode) queryParams.zipcode = filters.zipcode;
        if (filters.district) queryParams.district = filters.district;
        if (typeof filters.clickandcollect === 'boolean') queryParams.clickandcollect = filters.clickandcollect;
        if (filters.time) queryParams.time = filters.time;
        if (filters.businesshourtype) queryParams.businesshourtype = filters.businesshourtype;
        if (filters.open) queryParams.open = filters.open;

        const response = await axios.get(endpoint, {
            params: queryParams,
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });

        console.log('Mensas fetched successfully');

        // Check if the getIds query parameter is present
        if (filters.getIds) {
            // Extract only the IDs from the response
            const mensaIds = response.data.map(mensa => mensa.id);
            return mensaIds;
        }

        // Check if the getNames query parameter is present
        if (filters.getNames) {
            // Extract only the names from the response
            const mensaNames = response.data.map(mensa => mensa.name);
            return mensaNames;
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching mensas:', error);
        throw error;
    }
}

module.exports = { fetchMensas,};
