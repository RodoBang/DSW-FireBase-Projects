const { collection, addDoc, getDocs } = require("firebase/firestore");
const db = require("../firebaseConfig"); // Importar la configuración de Firebase

// Función para obtener todos los proyectos desde Firebase
async function getAllProjects() {
    try {
        const projectsCol = collection(db, 'projects'); // Acceder a la colección 'projects' en Firebase
        const projectsSnapshot = await getDocs(projectsCol); // Obtener todos los documentos de la colección
        const projectList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Mapear los documentos a un array
        return projectList; // Retornar la lista de proyectos
    } catch (error) {
        console.error("Error getting projects: ", error);
        throw new Error("Could not retrieve projects");
    }
}

// Función para crear un nuevo proyecto en Firebase
async function createProject(data) {
    try {
        const newProject = {
            name: data.name,
            description: data.description,
            startDate: data.startDate,
            endDate: data.endDate,
            status: data.status,
            budget: data.budget
        };
        const docRef = await addDoc(collection(db, 'projects'), newProject); // Añadir el nuevo proyecto a la colección 'projects'
        return { id: docRef.id, ...newProject }; // Retornar el nuevo proyecto con su ID generado por Firebase
    } catch (error) {
        console.error("Error creating project: ", error);
        throw new Error("Could not create project");
    }
}

module.exports = {
    getAllProjects,
    createProject
};
