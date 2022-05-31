import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Background1 from "./assets/images/background1.jpg";
import Background2 from "./assets/images/background2.jpg";
import Background3 from "./assets/images/background3.jpg";
import Background4 from "./assets/images/background4.jpg";
import Background5 from "./assets/images/background5.jpg";
import Background6 from "./assets/images/background6.jpg";
import Background7 from "./assets/images/background7.jpg";

import styles from "./App.module.scss";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <div className={styles.app}>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
           <div className={styles.wrapper}>
             <img className={styles.background} src={Background1} alt={"Background1"}/>
             <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
           </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
              <div className={styles.wrapper}>
                  <img className={styles.background} src={Background2} alt={"Background1"}/>
                  <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
              </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
              <div className={styles.wrapper}>
                  <img className={styles.background} src={Background3} alt={"Background1"}/>
                  <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
              </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
            <Animator animation={ZoomInScrollOut}>
                <div className={styles.wrapper}>
                    <img className={styles.background} src={Background4} alt={"Background1"}/>
                    <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
                </div>
            </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
              <Animator animation={FadeUp}>
                  <div className={styles.wrapper}>
                      <img className={styles.background} src={Background5} alt={"Background1"}/>
                      <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
                  </div>
              </Animator>
        </ScrollPage>

          <ScrollPage page={5}>
              <Animator animation={ZoomInScrollOut}>
                  <div className={styles.wrapper}>
                      <img className={styles.background} src={Background6} alt={"Background1"}/>
                      <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
                  </div>
              </Animator>
          </ScrollPage>

          <ScrollPage page={6}>
              <Animator animation={FadeUp}>
                  <div className={styles.wrapper}>
                      <img className={styles.background} src={Background7} alt={"Background1"}/>
                      <div className={styles.title}>WE DIGITALIZE ENTERPRISES</div>
                  </div>
              </Animator>
          </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
