import { Routes, Route } from 'react-router-dom'
import { Administradores } from './Pages/administradores'
import { Usuarios } from './Pages/usuarios'
// import { DefaultLayout } from './layouts/DefaultLayout'
// import { History } from './pages/History'
// import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/user" element={<Usuarios />} />
      <Route path="/admin" element={<Administradores />} />
    </Routes>
  )
}
