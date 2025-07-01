import { starpiInstance } from '@/config/strapiInstance';

export default async function handler(req, res) {
  try {
    // Test GET request to check if the endpoint exists
    const response = await starpiInstance.get('/api/college-prediction-datas');
    return res.status(200).json({
      success: true,
      data: response.data,
      status: response.status,
      headers: response.headers
    });
  } catch (error) {
    console.error('Test endpoint error:', error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers
      }
    });
  }
}
