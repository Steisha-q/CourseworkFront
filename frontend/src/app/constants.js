export const ROUTES = {
    home: () => '/',

    // auth pages
    signUp: () => '/signUp',
    signIn: () => '/signIn',

    // user pages
    profile: () => '/profile',

    // manager pages
    managerDashboard: () => '/manager/dashboard',

    categories: () => "/manager/categories",

    users: () => "/manager/users",

    // master pages
    main: () => '/main',
  
    // feedback page
    feedback: () => '/feedback',
    //for communities
    createcommunity: () => '/createcommunity',
    // shopping list page
    shopping: () => '/shopping',
    
    mprofile: () => '/master/Mprofile',

    editMprofile:()=>'/master/Mprofile/edit',

    raffles: () => '/manager/raffles',
    
    raffledetail: () => '/manager/raffles/detail',
    
    post: () => '/manager/post',
    
    status: () => '/manager/status',
    
    things:()=>'/manager/things',

    gain:()=>'/gains',

    editprofile: () => '/user/editprofile',

    create: () => '/master/create',
    
    masterpost: () => '/master/post',
    
    community: () => '/master/community',
    
    search:()=>'/master/search'
    
    prefer: () => '/user/preferences'
}