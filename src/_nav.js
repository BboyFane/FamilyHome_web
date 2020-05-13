export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',

    },
    {
      title: true,
      name: 'Compte',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Abonnement',
      url: '/abonnement', // renseignement
      icon: 'icon-puzzle',
    },
    {
      name: 'MyFamily',
      url: '/users',
      icon: 'icon-calculator',
    },
    {
      title: true,
      name: 'Pages',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Appareil',
      url: '/widgets',
      icon: 'icon-calculator',
    },
    {
      name: 'Factures',
      url: '/factures', // notification alerts
      icon: 'icon-puzzle',

    },
    {
      name: 'Historique',
      url: '/historique', // notification alerts
      icon: 'icon-star',

    },
    {
      name: 'Aide',
      url: '/404',
      icon: 'icon-bell',

    },

    {
      divider: true,
    },

    {
      name: 'Logout',
      url: 'http://127.0.0.1:5500/index.html',

    },

   
  ],
};
