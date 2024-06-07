import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/Toasts.css'
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

export const showToast = async (icon, title) => {
  await Toast.fire({
    icon,
    title,
  });
};
