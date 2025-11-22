import './styles/index.scss'
import { Sidebar } from '@/widgets/Sidebar'
import { Header } from '@/widgets/Header'
import { AppRouter } from './providers/RouterProvider/ui/AppRouter'


function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='content'>
          <Header />
          <div className="page-layout">
            <AppRouter />
          </div>
      </div>
    </div>
  )
}

export default App
