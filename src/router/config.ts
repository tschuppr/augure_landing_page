const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
    
  },
  {
    path: ["/"],
    exact: false,
    component: "Linkedin",
  },
];


export default routes;
