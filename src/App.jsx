import './App.css'
import HeroSection from './components/Home/HeroSection'
import TaskBoard from './components/Home/Task/TaskBoard'
import Footer from './components/Shared/Footer'
import Header from './components/Shared/Header'

const App = () => {
  return (
    <>
    <Header/>
    <div className="min-h-[calc(100vh-225px)]">
    <HeroSection/>
    <TaskBoard/>
    </div>
    <Footer/>
    </>
  )
}

export default App