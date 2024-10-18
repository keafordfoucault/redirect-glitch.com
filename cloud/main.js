// Cloud Code function to handle redirection with query string
Parse.Cloud.define('redirectWithQuery', async (request) => {
    try {
        // Lấy URL mục tiêu từ query parameters
        const targetURL = request.params.targetURL || 'https://example.com';

        // Lấy các query string khác từ request params, loại bỏ 'targetURL'
        const queryString = Object.entries(request.params)
            .filter(([key]) => key !== 'targetURL')
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        // Tạo URL chuyển hướng với query string
        const redirectURL = `${targetURL}?${queryString}`;

        // Trả về URL chuyển hướng
        return {
            redirectURL: redirectURL
        };

    } catch (error) {
        throw new Parse.Error(500, 'Error during redirect');
    }
});
