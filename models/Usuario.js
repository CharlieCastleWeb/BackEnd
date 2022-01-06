const { Schema, model } = require("mongoose");


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    organizationType: {
        type: String,
        required: true
    },
    projectList: {
        type: Array,
        required: false
    }
});



/*

export interface Project {
    title: string,
    projectId: string,
    ownerId: string,
    publishedDate: number,
    deadLine: number,
    techSet: string[],
    shortExplanation: string,
    state: string,
    bid: number
}

export interface User {
    name: string,
    userId: string,
    email: string,
    password: string,
    verified: boolean,
    projectsPublished: Project[],
    admin: boolean,
    typeOfInstitution: string
}

*/

module.exports = model('Usuario', UsuarioSchema);