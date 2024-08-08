export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Event',
      route: '/events/create',
    },
    {
      label: 'My Tickets',
      route: '/profile',
    },
  ]

export const userHeaderLink = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Events',
    route: '/allEvents'
  },
  {
    label:'FAQ',
    route:'/faq',
  },
  
]

  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }