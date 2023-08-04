import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FavoriteProvider } from './hooks/FavoriteContext';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback>
      <BrowserRouter>
        <FavoriteProvider>
          <GlobalStyle />
          <Theme>
            <App />
          </Theme>
        </FavoriteProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
