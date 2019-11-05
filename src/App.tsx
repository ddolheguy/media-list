import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { configureStore } from './store';
import theme from './theme/theme';
import { PageContainer } from './components';
import { MediaList } from './features/mediaList';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageContainer title='Media List'>
          <MediaList />
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
