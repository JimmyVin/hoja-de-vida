// Crear una etiqueta <style> y agregarla al head
const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        padding: 20px;
    }
    #cv-container {
        max-width: 800px;
        margin: auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: justify;
    }
    h1 {
        text-align: center;
    }
    h1, h2 {
        color: #258FCA;
    }
    .section {
        margin-bottom: 20px;
    }
    .section-title {
        font-size: 1.5em;
        margin-bottom: 10px;
    }
    .info-item {
        margin-bottom: 10px;
    }
    .info-title {
        font-weight: bold;
    }
`;
document.head.appendChild(style);
