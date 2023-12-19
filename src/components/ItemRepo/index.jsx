import PropTypes from 'prop-types'; // Certifique-se de importar PropTypes

import { FaTrash } from 'react-icons/fa';
import { ItemContainer } from './styles';

function ItemRepo({ repo, onRemoveRepo }) {
  const handleRemoveClick = () => {
    onRemoveRepo();
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver repositório
      </a>
      <br />
      <a href="#" className="remover" onClick={handleRemoveClick}>
        <FaTrash />
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

// Defina as propTypes para o componente
ItemRepo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    // Adicione outras propTypes conforme necessário
  }).isRequired,
  onRemoveRepo: PropTypes.func.isRequired,
};

export default ItemRepo;
