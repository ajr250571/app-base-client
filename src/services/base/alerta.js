import Swal from 'sweetalert2';

export function Alerta(title, text, icon, confirmButtonText) {
  Swal.fire({
    title,
    text: text || '',
    icon: icon || 'warning',
    confirmButtonText: confirmButtonText || 'OK',
    position: 'top-start'
  });
}

export function Tostada(title, icon, confirmButtonText) {
  let imagen = icon || 'warning';
  let color = '';

  switch (imagen) {
    case 'warning':
      // Amarillo
      color = '#FFFF5F';
      break;
    case 'error':
      // Rojo
      color = '#FF3600';
      break;
    case 'info':
      // Celeste
      color = '#00FFFF';
      break;
    case 'question':
      // Gris
      color = '#A4BBC1';
      break;
    case 'success':
      // Verde
      color = '#B7FF7A';
      
      break;
    default:
      break;
  }

  Swal.fire({
    title,
    icon: imagen,
    confirmButtonText: confirmButtonText || 'OK',
    position: 'top-start',
    background: color,
    toast: true,
    timer: 2000,
    width: '60%'
  });
}