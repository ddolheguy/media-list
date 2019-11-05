import React, { memo } from 'react';
import * as S from './ErrorHandler.style';

const ErrorHandler: React.FC = () => {
  return <S.Container>An error has occurred</S.Container>;
};

export default memo(ErrorHandler);
