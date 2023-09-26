enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};

export { AppRoutes, RoutePath }