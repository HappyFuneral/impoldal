<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Access-Control-Allow-Origin" content="*" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Impardonné') }}</title>
        <meta name="description" content="Egy élmény, amit a zenén keresztül adunk át!">
        <meta name="keywords" content="Impardonné, alter, rock, metál, alterzene, zene, rockzene, impardonné">
        <meta name="author" content="Maroevich Milán">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
