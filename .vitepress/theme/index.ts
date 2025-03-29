// .vitepress/theme/index.js
import ZayUi from 'zay-ui';
import 'zay-ui/dist/index.css';
import ZayIcon from 'zay-icon';
import 'zay-icon/dist/index.css';
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ZayUi);
    app.use(ZayIcon);
  },
};
