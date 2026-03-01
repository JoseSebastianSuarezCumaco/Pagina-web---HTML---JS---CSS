const diapositivas = {

presentacion: `
<p>
The technological training program in Software Analysis and Development is focused on developing skills related to the activities inherent in the process of creating computer applications, according to functional and technical requirements for a business solution. It establishes individual and teamwork methods, strengthening ethical, professional, and personal values for the benefit of society and the country's competitiveness.
</p>
<p>
As it is a program within the Information and Communications Technology sector, it has high relevance and demand in the country's business sector, since software and IT services are considered one of the world-class industries.
</p>
`,

justificacion: `
<p>
The flow of new technologies is reaching the country at an unprecedented pace, causing internal demand and expectations for new products and services to transform just as rapidly...
</p>
`,

competencias: `
<ul>
<li>Establish software requirements</li>
<li>Evaluate technical requirements</li>
<li>Design IT solutions</li>
<li>Develop applications</li>
<li>Implement systems</li>
<li>Control software quality</li>
</ul>
`,

perfilDeIngreso: `
<p>Requirements to enter the program:</p>
<ul>
<li>Academic: 11th grade completed</li>
<li>Pass aptitude, motivation, interest, and minimum entry competency tests</li>
</ul>
`,

perfilEgreso: `
<ul>
<li>Information Technology Technician</li>
<li>Application software coder</li>
</ul>
`,

estrategia: `
<p>
Centered on building autonomy to ensure the quality of training within a competency-based framework, project-based learning, and the use of active teaching techniques...
</p>
<ul>
<li>Instructor - tutor</li>
<li>The environment</li>
<li>ICT</li>
<li>Collaborative work</li>
</ul>
`
};

function mostrar(seccion){
    const titulo = document.getElementById("titulo");
    const contenido = document.getElementById("contenido");

    if(seccion === "presentacion") titulo.innerText="Presentation";
    if(seccion === "justificacion") titulo.innerText="Justification";
    if(seccion === "competencias") titulo.innerText="Competencies";
    if(seccion === "perfilDeIngreso") titulo.innerText="Admission Profile";
    if(seccion === "perfilEgreso") titulo.innerText="Graduation Profile";
    if(seccion === "estrategia") titulo.innerText="Training Strategy";    

    contenido.innerHTML = diapositivas[seccion];
}