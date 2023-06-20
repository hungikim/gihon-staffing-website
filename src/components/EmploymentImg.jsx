import { ParallaxBanner } from "react-scroll-parallax";
import styles from "./EmploymentImg.module.css";
import { useSelector } from "react-redux";

export default function Banner({ src }) {
  const isMobile = useSelector(state=>state.mobile.isMobile)

  return (
    <ParallaxBanner
      layers={[{ image: src, speed: isMobile? -10 : -30 }]}
      className={styles.EmploymentImg}
    >
    </ParallaxBanner>
  );
}
