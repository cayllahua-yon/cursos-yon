// server.js
import express from 'express'
import {createServer} from 'node:http'
import { Server } from 'socket.io';
import mqtt from 'mqtt'

// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);
// const mqtt = require('mqtt');

const app = express();
const server = createServer(app)
const io = new Server(server); // pasamos el objeto server

// --- CONFIGURACIÓN MQTT ---
// Usaremos un broker público para probar rápido. 
// En producción, aquí iría la IP de tu servidor privado y usuario/contraseña.
const MQTT_BROKER = 'mqtt://test.mosquitto.org'; 
const MQTT_TOPIC_RX = 'mi_casa/sala/temperatura'; // Recibir datos
const MQTT_TOPIC_TX = 'mi_casa/sala/luz';         // Enviar comandos

const client = mqtt.connect(MQTT_BROKER);

// 1. Conexión al Broker MQTT
client.on('connect', () => {
    console.log('✅ Conectado al Broker MQTT');
    client.subscribe(MQTT_TOPIC_RX);
});

// 2. Recibir mensaje del Sensor y enviarlo a la Web
client.on('message', (topic, message) => {
    const valor = message.toString();
    console.log(`📥 Dato recibido del sensor: ${valor}`);
    
    // Aquí es donde Socket.io brilla: envía el dato al navegador
    io.emit('dato_sensor', valor); 
});

// --- CONFIGURACIÓN WEB ---
// Servir los archivos de la carpeta 'public'
app.use(express.static('public'));

// 3. Recibir comandos desde la Web y enviarlos al Sensor
io.on('connection', (socket) => {
    console.log('👤 Un usuario abrió el dashboard');

    socket.on('comando_luz', (estado) => {
        console.log(`📤 Enviando comando al sensor: ${estado}`);
        client.publish(MQTT_TOPIC_TX, estado);
    });
});

// Iniciar servidor en puerto 3000
server.listen(3000, () => {
    console.log('🚀 Servidor rodando en http://localhost:3000');
});