import styled from "styled-components";
import { widthHeight, font, flexCenter } from "../../helpers/mixins";

export const FriendsItemStyle = styled.li`
  ${flexCenter({ jc: "flex-start" })};
  padding: ${(props) => props.theme.spacing(4)}
    ${(props) => props.theme.spacing(6)};
  border-radius: ${(props) => props.theme.spacing(1)};
  box-shadow: ${(props) => props.theme.colors.secondaryBoxShadow};
  overflow: hidden;
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(5)};
  }
`;

const Status = styled.span`
  ${widthHeight(16, 16)};
  border-radius: 50%;
  margin-right: ${(props) => props.theme.spacing(10)};
`;

export const Online = styled(Status)`
  background-color: ${(props) => props.theme.colors.green};
`;

export const Offline = styled(Status)`
  background-color: ${(props) => props.theme.colors.red};
`;

export const Avatar = styled.img`
  margin-right: ${(props) => props.theme.spacing(10)};
  border-radius: ${(props) => props.theme.spacing(1)};
  overflow: hidden;
  background: ${(props) => props.theme.colors.greyBg};
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
  box-shadow: ${(props) => props.theme.colors.secondaryBoxShadow};
  padding: 4px;
`;

export const UserName = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 20, fw: 600, lh: 22 })};
  color: ${(props) => props.theme.colors.secondaryText};
`;
