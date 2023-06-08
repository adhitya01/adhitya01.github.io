function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdWXbV7jWFaF-zxXpKkQv2qyzi0qwRARo3wExeFQirdvvgt3DJlk-gy-CVkzrrUrYXVN7uwTV7FtjC5yTIy2kzjjUajLI1wPjx97HNWpuiLWQ0MrI3lDWkRPIbTvwArqjEhSLckvy7ZeJ8rGHcKmSPUMdiUyTTK_QcjS3LBUSUd3iI0lYfknkM5Q2M/s1600/vibe%20TV.png',
        position: 'bottom-left',
        watermark: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlKLHUaphilUZ_72rhjbz_nQXhmuBUDmPbkNKvsPi_7Yw7Dd9fTZmewv-wRtQ5jmvX9SEv3z6pBnC9VzrTIdcY61VUPvDhkeHVwf0705UnAh5qPNiMjqFu3iOARBo80tfSa9PjJLR1oUWsHEtUkmwRiWViCV3ZsqsUim-4F8EKsasOktvbk7_CFwm8/s1600/VibeTV%20transparan.png",
        width: '100%',
        height: '100%',
        fullscreenEnabled: 'true',
        hideMediaControl: 'false',
        plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback],

        chromecast: {
            appId: '9DFB77C0',
            media: {
                type: ChromecastPlugin.Movie,
                title: 'Player HLS - DASH',
            },
        },

        shakaConfiguration: {
            preferredAudioLanguage: 'en-US',
            drm: {
                servers: {
                    'com.widevine.alpha': 'https://gausahcopybesokilang.satvb.workers.dev',
                }
            },
            streaming: {
                rebufferingGoal: 15
            }
        },
        shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
        },

    });

    document.title = "Watching: " + url;

}

playM3u8(window.location.href.split("#")[1], window.location.href.split("=")[1])
