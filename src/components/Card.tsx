import styled from "styled-components";

export default function Card() {
  return (
    <MainCard>
      <h2 id="advice-id">
        ADVICE <span id="number">#117</span>
      </h2>
      <p id="quote">
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <img
        className="divider mobile"
        src="./images/pattern-divider-mobile.svg"
        alt="divider with two horizontal lines and two paralel lines in between"
      />
      <img
        className="divider desktop"
        src="./images/pattern-divider-desktop.svg"
        alt="divider with two horizontal lines and two paralel lines in between"
      />

      <button id="dice-box">
        <img src="./images/icon-dice.svg" alt="dice icon" />
      </button>
    </MainCard>
  );
}

const MainCard = styled.div`
  background-color: rgba(49, 58, 72, 1);
  box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 40px 24px 64px;
  position: relative;

  & #advice-id {
    font-size: 11px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: 3.4571425914764404px;
    text-align: center;
    color: rgba(83, 255, 170, 1);

    @media (min-width: 1000px) {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 4.085713863372803px;
    }
  }

  & #quote {
    font-size: 24px;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: -0.2571428716182709px;
    text-align: center;
    color: rgba(206, 227, 233, 1);
    width: 295px;

    @media (min-width: 1000px) {
      font-size: 28px;
      width: 444px;
      line-height: 38px;
      letter-spacing: -0.30000001192092896px;
    }
  }

  & .desktop {
    display: none;

    @media (min-width: 1000px) {
      display: block;
      margin-top: 16px;
    }
  }

  & #dice-box {
    position: absolute;
    bottom: -11%;
    padding: 20px;
    border-radius: 50%;
    border: none;
    background-color: rgba(83, 255, 170, 1);
    cursor: pointer;
  }

  & #dice-box:hover {
    box-shadow: 0px 0px 40px 0px rgba(83, 255, 170, 1);
  }

  @media (min-width: 1000px) {
    padding: 46px 48px 72px;

    .mobile {
      display: none;
    }
  }
`;
