// Función para generar la hoja de vida
function generateCV(data) {
    const container = document.getElementById('cv-container');

    // Añadir imagen al principio si está disponible
    if (data.imageUrl) {
        const img = document.createElement('img');
        img.src = data.imageUrl;
        img.alt = `${data.name}`;
        img.style.width = '150px';
        img.style.height = '150px';
        img.style.borderRadius = '50%';
        img.style.display = 'block';
        img.style.margin = '0 auto 20px auto';
        container.appendChild(img);
    }

    // Nombre y título
    const header = document.createElement('div');
    header.innerHTML = `<h1>${data.name}</h1><h2>${data.title}</h2>`;
    container.appendChild(header);

    // Resumen
    const summarySection = document.createElement('div');
    summarySection.classList.add('section');
    summarySection.innerHTML = `<h2 class="section-title">Resumen</h2><p>${data.summary}</p>`;
    container.appendChild(summarySection);

    // Experiencia
    const experienceSection = document.createElement('div');
    experienceSection.classList.add('section');
    experienceSection.innerHTML = `<h2 class="section-title">Experiencia</h2>`;
    data.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('info-item');
        expItem.innerHTML = `
            <p class="info-title">${exp.title} en ${exp.company}</p>
            <p>${exp.years}</p>
            <p>${exp.description}</p>
        `;
        experienceSection.appendChild(expItem);
    });
    container.appendChild(experienceSection);

    // Educación
    const educationSection = document.createElement('div');
    educationSection.classList.add('section');
    educationSection.innerHTML = `<h2 class="section-title">Educación</h2>`;
    data.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.classList.add('info-item');
        eduItem.innerHTML = `
            <p class="info-title">${edu.degree}</p>
            <p>${edu.institution}</p>
            <p>${edu.years}</p>
        `;
        educationSection.appendChild(eduItem);
    });
    container.appendChild(educationSection);

    // Habilidades
    const skillsSection = document.createElement('div');
    skillsSection.classList.add('section');
    skillsSection.innerHTML = `<h2 class="section-title">Habilidades</h2>`;
    const skillsList = document.createElement('ul');
    data.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
    skillsSection.appendChild(skillsList);
    container.appendChild(skillsSection);

    // Contacto
    const contactSection = document.createElement('div');
    contactSection.classList.add('section');
    contactSection.innerHTML = `
        <h2 class="section-title">Contacto</h2>
        <!-- <p>Email: ${data.contact.email}</p> -->
        <p>Teléfono: <a href='https://wa.me/993731604'>${data.contact.phone}</a></p>
        <p>Dirección: ${data.contact.address}</p>
    `;
    container.appendChild(contactSection);
}

// Generar la hoja de vida cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    generateCV(cvData);
});
