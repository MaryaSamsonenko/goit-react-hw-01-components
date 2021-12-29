import styled from "styled-components";
import { centerBlock, widthHeight } from "../helpers/mixins";
export const Section = styled.section`
  ${widthHeight(600)};
  ${centerBlock};
  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: ${(props) => props.theme.colors.boxShadow};
  padding: ${(props) => props.theme.spacing(10)};
    
    & :not(:last-child):
    margin-bottom: ${(props) => props.theme.spacing(10)};
`;
