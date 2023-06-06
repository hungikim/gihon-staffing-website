import Navbar from './components/Navbar'
import Home from './components/Home'
import JobSeekers from './components/JobSeekers'
import Employers from './components/Employers'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
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
  gap: 30px;
  flex-direction: column;
  width: 100%;
  align-items: center;

`