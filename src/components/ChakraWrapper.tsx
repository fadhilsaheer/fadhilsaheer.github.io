import { ReactComponent } from '../utils/types';
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export const ChakraWrapper: ReactComponent = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};
