import styled from "styled-components";
import {
  centerBlock,
  widthHeight,
  font,
  flexCenter,
} from "../../helpers/mixins";

export const InfoWrapper = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing(8)} 0;
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};
  background: ${(props) => props.theme.colors.greyLigth};
`;

export const Avatar = styled.img`
  ${widthHeight(140, 140)};
  ${centerBlock};
  margin-bottom: ${(props) => props.theme.spacing(8)};
  border-radius: 50%;
  overflow: hidden;
  background: ${(props) => props.theme.colors.greyOpacity};
`;

export const UserName = styled.p`
  ${font({ fs: 24, fw: 600, lh: 32 })};
  margin-bottom: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  ${font({ fs: 18, fw: 500, lh: 20 })};
  color: ${(props) => props.theme.colors.grey};
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing(3)};
  }
`;

export const StatsList = styled.ul`
  ${flexCenter({ jc: "space-between" })};
  border: 1px solid ${(props) => props.theme.colors.greyOpacity};

  background-color: ${(props) => props.theme.colors.greyOpacity};
`;

export const StatsListItem = styled.li`
  ${flexCenter};
  flex-direction: column;
  width: calc(100% / 3);
  padding: ${(props) => props.theme.spacing(8)} 0;
  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.colors.greyOpacity};
  }
`;

export const Label = styled.span`
  ${font({ fs: 18, fw: 400, lh: 20 })};
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

export const LabelValue = styled.span`
  ${font({ fs: 18, fw: 500, lh: 20 })};
  color: ${(props) => props.theme.colors.secondaryText};
`;
