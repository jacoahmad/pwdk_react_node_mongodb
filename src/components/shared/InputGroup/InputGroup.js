import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input/Input';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
const InputGroup = ({ label, type, value, name, onChange }) => {
  return (
    <div>
      <div>
        <InputLabel>{label}</InputLabel>
      </div>
      <Input fullWidth type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  name: PropTypes.string,
};
export default InputGroup;
