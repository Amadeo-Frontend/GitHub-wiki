import { InputContainer } from './styles';
// eslint-disable-next-line react/prop-types
function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input
        placeholder="Procure um repositório"
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
