import { BottomContainer, CoolFacts, Timeline } from "../pages/Landing.styles";

export const Facts = () => (
    <BottomContainer>
        <CoolFacts>
          <li>It flies around the world every 90 minutes</li>
          <li>After the moon, the ISS is the 2nd brightest object at night</li>
          <li>
            There are 2 bathrooms, a gym, 6 sleeping areas, and a 360° bay
            window
          </li>
          <li>6 Spaceships can dock to the station at the same time</li>
        </CoolFacts>

        <h3>History & Timeline:</h3>
        <Timeline>
          <p>
            The ISS took 10 years and over 30 missions to assemble. A
            collaboration representing 15 contries. President Reagan directed
            NASA to build the ISS January 25th, 1984, the first segment lanched
            November 20, 1998, and the rest is history!
          </p>
          <p>
            You can find an up-t0-date comprehensive timeline{" "}
            <a href="https://www.nytimes.com/interactive/2020/11/02/science/iss-20th-anniversary-timeline.html">
              here.
            </a>
          </p>
        </Timeline>
      </BottomContainer>
)