import React from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';

const ThemePicker = (props) => {
  const { id, title, required, value, onChange, colors, className } = props;

  const handleChange = (e, { value }) => {
    onChange(id, value);
  };

  return colors && colors.length > 0 ? (
    <Form.Field
      inline
      required={required}
      className={className}
      id={'field-' + id}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column
            width="12"
            className="color-picker-widget"
            verticalAlign="middle"
          >
            <div className="wrapper">
              <label htmlFor={`field-${id}`}>{title ? title : 'Color'}</label>

              <div className="buttons">
                {colors.map((color) => {
                  return (
                    <Button
                      key={id + color.name}
                      className={color.name}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleChange(e, { value: color.name });
                      }}
                      active={value === color.name}
                      circular
                      aria-label={color.label}
                      title={color.label}
                    />
                  );
                })}
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>
  ) : null;
};

export default ThemePicker;
