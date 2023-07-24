import { defineMessages, injectIntl } from 'react-intl';
import { ThemePickerWidget } from './Widgets';

const messages = defineMessages({
  NoTheme: {
    id: 'No theme',
    defaultMessage: 'No theme',
  },
  Primary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  Secondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  Tertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
});

const applyConfig = (config) => {
  config.widgets.widget.theme_picker = ThemePickerWidget;

  config.settings.themeColors = [
    { value: undefined, title: intl.formatMessage(messages.NoTheme) },
    { value: 'primary', title: intl.formatMessage(messages.Primary) },
    { value: 'secondary', title: intl.formatMessage(messages.Secondary) },
    { value: 'tertiary', title: intl.formatMessage(messages.Tertiary) },
  ];

  return config;
};

export default injectIntl(applyConfig);
