import styled from "styled-components";

export const PopoverWrapper = styled.div`
  position: fixed;
  z-index: 9;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  background-color: white;
  border-radius: 15px;
  border: solid rgba(0, 0, 0, 0.1) 1px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  @media (min-width: 0px) {
    height: 50%;
    bottom: 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1000px) {
    width: 60rem;
    max-width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
