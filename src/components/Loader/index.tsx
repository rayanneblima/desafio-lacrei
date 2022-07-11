import React from 'react';
import { LoaderType } from '../../types/Loader.types';
import { LoaderBox } from './styles';

interface Props {
  loader: LoaderType;
}

const Loader:React.FC<Props> = ({ loader }) => {
  return (
    <LoaderBox
      id={`loader--${loader.color}`}
      color={loader.color}
    />
  )
}

export default Loader;