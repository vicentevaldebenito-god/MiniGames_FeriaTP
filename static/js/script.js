const pitchGames = {
    1: {
        title: "El Business Model Canvas",
        color: "var(--card-blue)",
        tagBg: "#dbeafe",
        tagColor: "var(--card-blue)",
        questions: [
            {
                q: "1. Según nuestro Canvas, ¿cuál es el segmento de clientes clave al que apuntamos?",
                options: [
                    { text: "Usuarios y organizaciones que buscan optimizar sus procesos diarios", pts: 100 },
                    { text: "Empresas multinacionales sin necesidad de digitalización", pts: 0 },
                    { text: "Un sector reducido sin interés en soluciones tecnológicas", pts: 0 }
                ]
            },
            {
                q: "2. ¿Cuál es uno de nuestros CANALES principales para llegar a los usuarios?",
                options: [
                    { text: "Plataformas digitales, redes y alianzas directas", pts: 100 },
                    { text: "Anuncios impresos en periódicos locales", pts: 0 },
                    { text: "Venta física de puerta en puerta únicamente", pts: 0 }
                ]
            },
            {
                q: "3. ¿Qué RECURSOS CLAVE necesitamos para que el modelo funcione?",
                options: [
                    { text: "Infraestructura tecnológica, equipo de desarrollo y datos", pts: 100 },
                    { text: "Maquinaria pesada e instalaciones industriales", pts: 0 },
                    { text: "Grandes bodegas de almacenamiento físico", pts: 0 }
                ]
            },
            {
                q: "4. En la estructura de costos del Canvas, ¿dónde va la mayor parte de la inversión?",
                options: [
                    { text: "Desarrollo tecnológico, mantenimiento y marketing", pts: 100 },
                    { text: "Gastos excesivos de papelería e impresiones", pts: 0 },
                    { text: "Comisión de intermediarios tradicionales", pts: 0 }
                ]
            },
            {
                q: "5. ¿Cómo aseguramos la sostenibilidad financiera según nuestras FUENTES DE INGRESO?",
                options: [
                    { text: "Suscripciones, licencias o modelos freemium/comisiones", pts: 100 },
                    { text: "Dependiendo únicamente de donaciones esporádicas", pts: 0 },
                    { text: "Ofreciendo todo 100% gratuito sin plan de monetización", pts: 0 }
                ]
            }
        ]
    },
    2: {
        title: "La Aplicación",
        color: "var(--card-purple)",
        tagBg: "#f3e8ff",
        tagColor: "var(--card-purple)",
        questions: [
            {
                q: "1. ¿Cuál es la función principal que demostramos dentro de la app?",
                options: [
                    { text: "El panel interactivo de gestión e integración en tiempo real", pts: 100 },
                    { text: "Un catálogo estático que no permite interactuar", pts: 0 },
                    { text: "Un sistema manual que requiere ingresar datos uno por uno", pts: 0 }
                ]
            },
            {
                q: "2. ¿Qué destaca de la Experiencia de Usuario (UX) de nuestra app?",
                options: [
                    { text: "Es intuitiva, ágil y fácil de usar desde el primer momento", pts: 100 },
                    { text: "Es un sistema complejo que requiere un manual extenso", pts: 0 },
                    { text: "Tiene un diseño sobrecargado y lento", pts: 0 }
                ]
            },
            {
                q: "3. ¿Qué problema directo resuelve la app cuando el usuario la ejecuta?",
                options: [
                    { text: "Ahorra tiempo automatizando tareas complejas o desordenadas", pts: 100 },
                    { text: "Duplica la cantidad de pasos para hacer un trámite", pts: 0 },
                    { text: "Aumenta la carga de trabajo diaria", pts: 0 }
                ]
            },
            {
                q: "4. ¿En qué plataformas o dispositivos está pensada la app?",
                options: [
                    { text: "Acceso multiplataforma (Móvil y Web accesible desde cualquier lugar)", pts: 100 },
                    { text: "Exclusivamente para un modelo antiguo de computadora", pts: 0 },
                    { text: "Requiere instalación en servidores físicos locales", pts: 0 }
                ]
            },
            {
                q: "5. ¿Qué beneficio se lleva el usuario tras usar la aplicación unos minutos?",
                options: [
                    { text: "Resultados inmediatos, claridad de información y control", pts: 100 },
                    { text: "Confusión sobre dónde quedó su información", pts: 0 },
                    { text: "La necesidad de llamar a soporte técnico para todo", pts: 0 }
                ]
            }
        ]
    },
    3: {
        title: "La Propuesta Global",
        color: "var(--card-pink)",
        tagBg: "#fce7f3",
        tagColor: "var(--card-pink)",
        questions: [
            {
                q: "1. En términos generales, ¿cuál es el VALOR PRINCIPAL de todo nuestro proyecto?",
                options: [
                    { text: "Transformar una solución compleja en algo accesible, moderno y eficiente", pts: 100 },
                    { text: "Competir únicamente bajando precios sin aportar calidad", pts: 0 },
                    { text: "Mantener el formato tradicional que se ha usado por años", pts: 0 }
                ]
            },
            {
                q: "2. ¿Por qué nuestra propuesta supera a las alternativas actuales del mercado?",
                options: [
                    { text: "Por nuestra combinación de tecnología, bajo costo y enfoque en el usuario", pts: 100 },
                    { text: "Porque somos la opción más cara y difícil de contratar", pts: 0 },
                    { text: "No ofrece ventajas diferenciadoras reales", pts: 0 }
                ]
            },
            {
                q: "3. ¿Cuál es la visión de impacto a largo plazo de esta propuesta?",
                options: [
                    { text: "Escalar, innovar continuamente y dominar nuestro sector objetivo", pts: 100 },
                    { text: "Quedarnos como un proyecto escolar o prueba piloto fija", pts: 0 },
                    { text: "Vender la idea al primer postor y abandonar el desarrollo", pts: 0 }
                ]
            },
            {
                q: "4. Si tuvieras que definir el proyecto en una palabra clave, ¿cuál sería?",
                options: [
                    { text: "Innovación / Eficiencia", pts: 100 },
                    { text: "Complicación", pts: 0 },
                    { text: "Estancamiento", pts: 0 }
                ]
            },
            {
                q: "5. ¿Cuál es el llamado a la acción (Call to Action) para la audiencia hoy?",
                options: [
                    { text: "Sumarse, probar la app / conectar con nosotros para llevar esto al siguiente nivel", pts: 100 },
                    { text: "Ignorar la presentación y continuar como si nada", pts: 0 },
                    { text: "Esperar a que otra empresa desarrolle la misma idea", pts: 0 }
                ]
            }
        ]
    }
};

let currentGameId = null;
let currentQuestionIdx = 0;
let userScore = 0;
let isAnswering = false;

function selectGame(gameId) {
    const main = document.getElementById("mainContainer");
    
    main.classList.add("zoom-out-screen");

    setTimeout(() => {
        main.classList.remove("zoom-out-screen");
        currentGameId = gameId;
        currentQuestionIdx = 0;
        userScore = 0;
        isAnswering = false;
        
        const gData = pitchGames[gameId];
        
        const tag = document.getElementById("gameTag");
        tag.innerText = gData.title;
        tag.style.background = gData.tagBg;
        tag.style.color = gData.tagColor;

        document.getElementById("progressFill").style.background = gData.color;

        document.getElementById("gameModal").classList.add("active");
        renderQuestion();
    }, 350);
}

function closeModal() {
    document.getElementById("gameModal").classList.remove("active");
}

function renderQuestion() {
    isAnswering = false;
    const game = pitchGames[currentGameId];
    const qData = game.questions[currentQuestionIdx];
    const totalQ = game.questions.length;

    document.getElementById("questionTracker").innerText = `${currentQuestionIdx + 1} de ${totalQ}`;
    const progress = ((currentQuestionIdx) / totalQ) * 100;
    document.getElementById("progressFill").style.width = `${progress}%`;

    const content = document.getElementById("modalContent");
    
    let html = `<div class="question-text">${qData.q}</div>`;
    
    qData.options.forEach((opt, idx) => {
        html += `
            <button class="option-btn" id="opt-${idx}" onclick="submitAnswer(${opt.pts}, ${idx})">
                <span class="opt-text">${opt.text}</span>
                <i class="fa-solid fa-chevron-right opt-icon" style="font-size:0.8rem; opacity:0.5;"></i>
            </button>
        `;
    });

    content.innerHTML = html;
}

function submitAnswer(points, selectedIdx) {
    if (isAnswering) return;
    isAnswering = true;

    userScore += points;
    const selectedBtn = document.getElementById(`opt-${selectedIdx}`);
    const icon = selectedBtn.querySelector('.opt-icon');

    if (points > 0) {
        selectedBtn.classList.add('correct');
        icon.className = 'fa-solid fa-circle-check opt-icon';
        icon.style.opacity = '1';
    } else {
        selectedBtn.classList.add('incorrect');
        icon.className = 'fa-solid fa-circle-xmark opt-icon';
        icon.style.opacity = '1';
    }

    setTimeout(() => {
        currentQuestionIdx++;
        const game = pitchGames[currentGameId];
        if (currentQuestionIdx < game.questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }, 900);
}

function showResults() {
    document.getElementById("progressFill").style.width = "100%";
    document.getElementById("questionTracker").innerText = "¡Completado!";
    
    const content = document.getElementById("modalContent");
    const game = pitchGames[currentGameId];

    let stars = "⭐";
    let feedback = "";

    if (userScore === 500) {
        stars = "⭐⭐⭐";
        feedback = "<strong>¡Atención Absoluta! 🔥</strong><br>¡Puntaje perfecto! Demostraste dominar todos los detalles de nuestro Canvas, la App y la Propuesta.";
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } else if (userScore >= 300) {
        stars = "⭐⭐";
        feedback = "<strong>¡Excelente Trabajo! 👍</strong><br>Captaste muy bien las ideas más importantes de nuestra exposición.";
    } else {
        stars = "⭐";
        feedback = "<strong>¡Buen Intento! 😅</strong><br>Gracias por participar. Si te quedó alguna duda de la App o el Canvas, ¡puedes preguntarnos al terminar!";
    }

    content.innerHTML = `
        <div class="result-box">
            <div class="stars">${stars}</div>
            <p style="color:var(--text-secondary); font-weight:700;">Tu Resultado Final:</p>
            <div class="score-badge" style="color: ${game.color}">${userScore} <span style="font-size:1.2rem; color:var(--text-secondary);">/ 500 pts</span></div>
            <p class="feedback-text">${feedback}</p>
            <button class="btn-primary" style="background: ${game.color}" onclick="closeModal()">Volver al Menú</button>
        </div>
    `;
}