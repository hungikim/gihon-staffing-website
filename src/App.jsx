import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import JobSeekers from './pages/JobSeekers'
import Employers from './pages/Employers'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import styled from 'styled-components'

export default function App() {

  return (
    <>
    <Navbar />
    <Content>
      <Home />
      <JobSeekers />
      <Employers />
      <AboutUs />
      <Contact />
    </Content>
    </>
  )
}

const Content = styled.main`
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%; height: 100%;
`