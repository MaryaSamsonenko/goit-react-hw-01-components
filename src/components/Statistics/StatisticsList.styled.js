import styled from "styled-components";
import { font, flexCenter } from "../../helpers/mixins";

export const StatsList = styled.ul`
  ${flexCenter({ jc: "space-between" })};
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
`;
export const StatsTitle = styled.h2`
  text-align: center;

  ${font({ fs: 24, fw: 600, lh: 32 })};
  color: ${(props) => props.theme.colors.primaryText}};
  margin-bottom: ${(props) => props.theme.spacing(5)};
`;
