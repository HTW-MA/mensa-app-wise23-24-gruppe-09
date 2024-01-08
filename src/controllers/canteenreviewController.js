const axios = require("axios");

const MENSA_API_BASE_URL = 'https://mensa.gregorflachs.de/api/v1';
async function fetchCanteenreview(filters) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/canteenreview`;
        console.log('Fetching canteenreview');
        const response = await axios.get(endpoint, {
            params: filters,
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });
        console.log('canteenreview fetched successfully');
        return response.data;
    } catch (error) {
        console.error('Error fetching canteenreview:', error);
        throw error;
    }
}
//man muss noch den request body beachten
async function createCanteenreview(data) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/canteenreview`;
        console.log('Creating canteenreview');
        const response = await axios.post(endpoint, data, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',
            },
        });
        console.log('canteenreview created successfully');
        return response.data;
    } catch (error) {
        console.error('Error creating canteenreview:', error);
        throw error;
    }
}

async function updateCanteenreview(id, updatedData) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/canteenreview/${id}`;
        console.log('Updating canteenreview');
        const response = await axios.put(endpoint, updatedData, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',  // Replace with your actual API key
            },
        });
        console.log('canteenreview updated successfully');
        return response.data;
    } catch (error) {
        console.error('Error updating canteenreview:', error);
        throw error;
    }
}

async function deleteCanteenreview(id) {
    try {
        const endpoint = `${MENSA_API_BASE_URL}/canteenreview/${id}`;
        console.log('Deleting canteenreview');
        const response = await axios.delete(endpoint, {
            headers: {
                'X-API-KEY': 'EiEBfRSBEgEwo6XYAXupp6JQ0RuF0/aRyLSX2HHMF6jWLTsDaOREOluwS4tyPEcKHuNMLdzYT2pB+CkZhvRedw8/6OIw6tjh2nFsYab1BYMP07HhEU3yzgksDXQBZnqpOc00fRPEGkjkSZ1pnG5JfUkiofCFU01qpRoLhQQgy9hcfbGrIiHZUyDtCwxJgk14TKdcRfc/XEzMFXkBPQjLokZxthHRZhsRP1qoiq1OzP/5qiYv603w9NDjkLfRGVMddmoalZq2TEsQn3r4nT1cbK1FrR96FMoVDzcE007DRqlxKSs7A6U50yuIal+X7A048IwP+Az6rCcRRiwZHb5m+w==',  // Replace with your actual API key
            },
        });

        // Check if the deletion was successful based on the HTTP status code
        if (response.status === 204) {
            console.log('canteenreview deleted successfully');
            return true;
        } else {
            console.error('Error deleting canteenreview:', response.status);
            return false;
        }
    } catch (error) {
        console.error('Error deleting canteenreview:', error);
        throw error;
    }
}



module.exports = { fetchCanteenreview, createCanteenreview, updateCanteenreview, deleteCanteenreview };