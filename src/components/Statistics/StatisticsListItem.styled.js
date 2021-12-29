import styled from "styled-components";

import { font, flexCenter } from "../../helpers/mixins";
import { getRandomRGBColor } from "../../helpers/randomColor";

export const StatsListItem = styled.li`
  ${flexCenter};
  flex-direction: column;
  width: calc(100% / 5);
  padding: ${(props) => props.theme.spacing(4)} 0;
  background-color: ${getRandomRGBColor};
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.greyOpacity};
  }
`;
export const StatsLabel = styled.span`
  ${font({ fs: 16, fw: 400, lh: 18 })};
  color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;
export const StatsLabelValue = styled.span`
  ${font({ fs: 22, fw: 400, lh: 24 })};
  color: ${(props) => props.theme.colors.white};
`;
