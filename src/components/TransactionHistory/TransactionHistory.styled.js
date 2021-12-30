import styled from "styled-components";
import { font } from "../../helpers/mixins";

export const Table = styled.table`
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
  width: 100%;
  box-shadow: ${(props) => props.theme.colors.secondaryBoxShadow};
`;
export const TableTr = styled.tr`
  font-family: ${(props) => props.theme.fonts.secondary};
  background: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
`;
export const TableTh = styled.th`
  color: ${(props) => props.theme.colors.white};

  padding: ${(props) => props.theme.spacing(4)};
  ${font({ fs: 22, fw: 600, lh: 24 })};
`;
export const TableTrEv = styled.tr`
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
