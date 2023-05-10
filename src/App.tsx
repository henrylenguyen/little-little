import PageNotFound from 'layouts/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import routes from 'routes/routes'

function App() {
  return (
    <>
      <Routes>
        {routes?.map(({ path, component: Component, children }, idx) => {
          return (
            <Route key={idx} path={path} element={<Component />}>
              {children?.map(({ path, component: Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Route>
          )
        })}
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </>
  )
}

export default App




