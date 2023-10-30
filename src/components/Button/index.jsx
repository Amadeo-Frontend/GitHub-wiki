import { CiPaperplane } from 'react-icons/ci';
import { ButtonContainer } from './styles';
// eslint-disable-next-line react/prop-types
function Button({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <CiPaperplane />
    </ButtonContainer>
  );
}

export default Button;
