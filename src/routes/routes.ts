import ContainerLayout from 'layouts/ContainerLayout'
import ContactPage from 'pages/ContactPage'
import EventDetailPage from 'pages/EventDetailPage'
import EventPage from 'pages/EventPage'
import HomePage from 'pages/HomePage'
import PaymentDetailPage from 'pages/PaymentDetailPage'
import PaymentPage from 'pages/PaymentPage'

const routes = [
  {
    path: '/',
    component: ContainerLayout,
    children: [
      {
        path: '/',
        component: HomePage
      },
      {
        path: '/event',
        component: EventPage
      },
      {
        path: '/event/:eventId',
        component: EventDetailPage
      },
      {
        path: '/contact',
        component: ContactPage
      },
      {
        path: '/payment',
        component: PaymentPage
      },
      {
        path: '/payment/:paymentDetail',
        component: PaymentDetailPage
      }
    ]
  }
]
export default routes
