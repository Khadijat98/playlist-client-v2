import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ViewPlaylists from '../ViewPlaylists/ViewPlaylists';
import CreatePlaylist from '../../components/CreatePlaylist/CreatePlaylist';
import ShowPlaylist from '../../components/ShowPlaylist/ShowPlaylist';
import EditPlaylist from '../../components/EditPlaylist/EditPlaylist';
import ErrorPage from '../ErrorPage/ErrorPage';

const Dashboard = () => {
  
  return (
    <div>
      <Router >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/playlist/create" element={<CreatePlaylist />}/>
          <Route path="/playlists" element={<ViewPlaylists />}/>
          <Route path="/playlist" element={<ShowPlaylist />}/> 
          <Route path="/playlist/edit" element={<EditPlaylist />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Dashboard;