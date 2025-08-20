export const enviroment = {
    production: false
}

export const SpotifyConfiguration = {
    clientId: '57bbe48c63074e1ba1ca922f0f296697',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    apiTokenEndpoint: 'https://accounts.spotify.com/api/token',
    redirectUri: 'http://127.0.0.1:4200/login',
    scopes: [
        'user-read-currently-playing',
        'user-read-playback-state',
        'user-read-recently-played',
        'user-top-read',
        'user-modify-playback-state',
        'user-library-read',
        'playlist-read-private',
        'playlist-read-collaborative',
    ]
}