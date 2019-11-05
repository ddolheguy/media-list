import React, { memo } from 'react';
import { H1 } from '../Headlines/Headlines';
import * as S from './PageContainer.style';

const AppContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <S.Container>
      <H1>{title}</H1>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

type Props = {
  title: string;
  children: React.ReactNode;
};

export default memo(AppContainer);
