import { ThemePickerWidget } from './Widgets';

const applyConfig = (config) => {
  config.widgets.widget.theme_picker = ThemePickerWidget;

  config.settings.themeColors = [
    { value: 'default', title: 'Default' },
    { value: 'primary', title: 'Primary' },
    { value: 'secondary', title: 'Secondary' },
    { value: 'tertiary', title: 'Tertiary' },
  ];

  return config;
};

export default applyConfig;
