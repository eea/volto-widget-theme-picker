import { ThemePickerWidget } from './Widgets';

const applyConfig = (config) => {
  config.widgets.widget.theme_picker = ThemePickerWidget;

  config.settings.themeColors = [
    { value: undefined, title: 'No theme' },
    { value: 'primary', title: 'Primary' },
    { value: 'secondary', title: 'Secondary' },
    { value: 'tertiary', title: 'Tertiary' },
  ];

  return config;
};

export default applyConfig;
