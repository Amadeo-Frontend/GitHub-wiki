import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';
import gitLogo from '/favicon.png';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepos, setCurrentRepos] = useState('');

  const handleRemoveRepo = (repoId) => {
    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== repoId));
    toast.success('Repositório removido com sucesso!', {
      autoClose: 3000,
    });
  };

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepos}`);
    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepos('');
        toast.success('Repositório adicionado com sucesso!', {
          autoClose: 3000,
        });
        return;
      }
    }
    alert('Nenhum repositório encontrado!');
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <div className="container-input">
        <Input
          value={currentRepos}
          onChange={(e) => setCurrentRepos(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
      </div>
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          onRemoveRepo={() => handleRemoveRepo(repo.id)}
        />
      ))}
    </Container>
  );
}

export default App;
