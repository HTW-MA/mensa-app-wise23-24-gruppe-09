const axios = require("axios");

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';
async function fetchMealreview(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/mealreview`;
        console.log('Fetching mealreview');
        const response = await axios.get(endpoint, {
            params: filters,
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });
        console.log('mealreview fetched successfully');
        return response.data;
    } catch (error) {
        console.error('Error fetching mealreview:', error);
        throw error;
    }
}
//man muss noch den request body beachten
async function createMealreview(data) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/mealreview`;
        console.log('Creating mealreview');
        const response = await axios.post(endpoint, data, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });
        console.log('mealreview created successfully');
        return response.data;
    } catch (error) {
        console.error('Error creating mealreview:', error);
        throw error;
    }
}

async function updateMealreview(id, updatedData) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/mealreview/${id}`;
        console.log('Updating mealreview');
        const response = await axios.patch(endpoint, updatedData, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',  // Replace with your actual API key
            },
        });
        console.log('mealreview updated successfully');
        return response.data;
    } catch (error) {
        console.error('Error updating mealreview:', error);
        throw error;
    }
}

async function deleteMealreview(id) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/mealreview/${id}`;
        console.log('Deleting mealreview');
        const response = await axios.delete(endpoint, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',  // Replace with your actual API key
            },
        });

        // Check if the deletion was successful based on the HTTP status code
        if (response.status === 204) {
            console.log('Mealreview deleted successfully');
            return true;
        } else {
            console.error('Error deleting mealreview:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error deleting mealreview:', error);
        throw error;
    }
}



module.exports = { fetchMealreview, createMealreview, updateMealreview, deleteMealreview };