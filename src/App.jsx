import Navbar from './components/Navbar'
import Home from './components/Home'
import JobSeekers from './components/JobSeekers'
import Employers from './components/Employers'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setIsMobile } from './state/mobileSlice'

export default function App() {
  const isMobile = useSelector(state=>state.mobile.isMobile)
  const query = "(max-width:768px)" // Check for mobile devices
  const dispatch = useDispatch()
  useEffect(() => { // Detect mobile devices. Source: https://fireship.io/snippets/use-media-query-hook/
    const media = window.matchMedia(query);
    if (media.matches !== isMobile) {
      dispatch(setIsMobile(media.matches))
    }
    const listener = () => dispatch(setIsMobile(media.matches))
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [isMobile, query]);

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