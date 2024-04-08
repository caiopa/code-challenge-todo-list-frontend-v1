import * as React from 'react';
import * as S from './input.style';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <S.Input type={type} ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';

export { Input };
