import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("boardID");
    localStorage.removeItem("workspaceId");
    Swal.fire({
      icon: 'success',
      title: 'Logout Berhasil!',
      text: 'Anda telah keluar dari akun.',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      navigate('/Login');
    });
  };

  return handleLogout;
};