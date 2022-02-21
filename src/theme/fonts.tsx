import styled from 'styled-components/native';
import Colors from './colors';

const BaseText = styled.Text`
  color: ${Colors.TEXT};
`;

const Normal = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${Colors.TEXT};
`;

const Bold = styled(Normal)`
  font-weight: bold;
`;

const Heading1 = styled(BaseText)`
  font-size: 40px;
  font-weight: bold;
`;

const Heading2 = styled(BaseText)`
  font-size: 30px;
  font-weight: bold;
`;

const Heading3 = styled(BaseText)`
  font-size: 28px;
  font-weight: bold;
`;

const Heading4 = styled(BaseText)`
  font-size: 24px;
  font-weight: bold;
`;

const Heading5 = styled(BaseText)`
  font-size: 22px;
  font-weight: bold;
`;

const Heading6 = styled(BaseText)`
  font-size: 20px;
  font-weight: bold;
`;

const Title1 = styled(BaseText)`
  font-size: 20px;
`;

const Title2 = styled(BaseText)`
  font-size: 18px;
`;

const Title3 = styled(BaseText)`
  font-size: 16px;
`;

const Title4 = styled(BaseText)`
  font-size: 14px;
`;

const Title5 = styled(BaseText)`
  font-size: 12px;
`;

const basedTexts = {
  Normal,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Title1,
  Title2,
  Title3,
  Title4,
  Title5,
};

const applied = {};

export default {
  ...basedTexts,
  ...applied,
};