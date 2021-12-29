import PropTypes from "prop-types";
import { Section } from "../../common/Section.styled";
import {
  Avatar,
  InfoWrapper,
  UserName,
  Text,
  StatsList,
  StatsListItem,
  Label,
  LabelValue,
} from "./Profile.styled";

export const Profile = ({
  profile: { username, tag, location, avatar, stats },
}) => {
  return (
    <Section>
      <InfoWrapper>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </InfoWrapper>
      <StatsList>
        <StatsListItem>
          <Label>Followers</Label>
          <LabelValue className="quantity">{stats.followers}</LabelValue>
        </StatsListItem>
        <StatsListItem>
          <Label>Views</Label>
          <LabelValue className="quantity">{stats.views}</LabelValue>
        </StatsListItem>
        <StatsListItem>
          <Label>Likes</Label>
          <LabelValue className="quantity">{stats.likes}</LabelValue>
        </StatsListItem>
      </StatsList>
    </Section>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
