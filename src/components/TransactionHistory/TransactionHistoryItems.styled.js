import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const TableTr = styled.tr`
border: 1px solid ${(props) => props.theme.colors.greyOpacity};
:nth-child(even) {
    background: ${(props) => props.theme.colors.blueLigth}
`;
export const TableTd = styled.th`
  ${font({ fs: 18, fw: 400, lh: 22 })};
  padding: ${(props) => props.theme.spacing(4)};
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
  text-align: center;
`;
