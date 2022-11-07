import { Card } from "react-bootstrap";
import styled from "styled-components";

export const LabelCard = styled(Card)`
  width: auto;
  height: auto;
  max-height: 62px;
  max-width: auto;
  border-radius: 0;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
  z-index: 1;
  & div.card-body {
    padding-left: 8px;
  }
`;

export const TImeCard = styled(Card)`
  width: auto;
  height: auto;
  max-height: 62px;
  max-width: 60px;
  border-radius: 0;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
  z-index: 1;
  & div.card-body {
    padding-right: 8px;
  }
`;
