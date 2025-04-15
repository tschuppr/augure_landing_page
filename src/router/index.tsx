import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TestimonyBlock from '../components/TestimonyBlock'
import TestimonialContent from '../content/TestimonialContent.json'

import routes from './config'
import { Styles } from '../styles/styles'

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          if (routeItem.component === 'Linkedin') {
            const LinkedinRedirect = () => {
              window.location.href = 'https://www.linkedin.com/company/augure-io/'
              return null
            }
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                element={<LinkedinRedirect />}
              />
            )
          } else {
            const Element = lazy(() => import(`../pages/${routeItem.component}/index.tsx`))
            return <Route key={routeItem.component} path={routeItem.path} element={<Element />} />
          }
        })}
      </Routes>
      <TestimonyBlock
        title={TestimonialContent.title}
        elements={TestimonialContent.elements}
        id={TestimonialContent.id}
      />
      <Footer />
    </Suspense>
  )
}

export default Router
