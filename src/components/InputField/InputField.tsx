import React, { memo } from 'react';
import * as S from './InputField.style';

const InputField: React.FC<Props> = ({
  label,
  onChange,
  placeholder,
  value
}) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} onChange={onChange} value={value} />
    </S.Container>
  );
};

type Props = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
};

export default memo(InputField);
