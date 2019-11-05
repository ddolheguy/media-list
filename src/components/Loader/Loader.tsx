import React, { memo } from 'react';
import * as S from './Loader.style';

const Loader: React.FC = () => {
  return <S.Container>Please wait...</S.Container>;
};

export default memo(Loader);
