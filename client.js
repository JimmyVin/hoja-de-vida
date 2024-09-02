// Observador de rendimiento para obtener información de navegación
const observer = new PerformanceObserver((list) => {
    list.getEntriesByType('navigation').forEach((entry) => {
      const { startTime, duration, type } = entry;
      const userAgent = navigator.userAgent;
      const connectionType = (navigator.connection || navigator.networkInformation)?.effectiveType || 'No disponible';
  
      // Obtener la geolocalización de forma asíncrona
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
  
//           const message = `
//   Información de navegación:
//   - Tipo: ${type}
//   - Inicio: ${startTime}
//   - Duración: ${duration}
//   - User Agent: ${userAgent}
//   - Conexión: ${connectionType}
//   - Latitud: ${latitude}
//   - Longitud: ${longitude}
//           `;
  
//           sendMessageToTelegram(message);
//         },
//         (error) => {
//           console.error('Error al obtener la geolocalización:', error);
  
//           const message = `
//   Información de navegación (sin geolocalización):
//   - Tipo: ${type}
//   - Inicio: ${startTime}
//   - Duración: ${duration}
//   - User Agent: ${userAgent}
//   - Conexión: ${connectionType}
//           `;
  
//           sendMessageToTelegram(message);
//         }
//       );
const message = `
Información de navegación (sin geolocalización):
- Tipo: ${type}
- Inicio: ${startTime}
- Duración: ${duration}
- User Agent: ${userAgent}
- Conexión: ${connectionType}
        `;

        sendMessageToTelegram(message);
    });
  });
  
  observer.observe({ entryTypes: ['navigation'] });
  
  async function sendMessageToTelegram(message) {
    const botToken = '7518463533:AAFmqAmL2vjhK7XpaTCXld_McSu6kKO_m0U'; // Reemplaza con tu token de bot
    const chatId = '5415238794'; // Reemplaza con tu ID de chat
  
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }
  
      console.log('Mensaje enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }