const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2d0335e0e98cff1564acd8ef6caaf150',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;