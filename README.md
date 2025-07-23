# react-mqtt-arduino-dashboard
IoT dashboard built with React and MQTT to control an Arduino device. Enables real-time message, color, and animation updates on an LED matrix using secure WebSockets.

# React + MQTT + Arduino Dashboard

This README is available in English and Spanish.  
Este README está disponible en inglés y español.

---
## Project Summary

IoT dashboard built with React and MQTT that sends data to an Arduino to control an LED matrix.  
Enables real-time message, color, and animation updates on an 8x8 LED matrix using secure WebSockets.

More details here:  
[Detailed explanation & use case (Google Docs)](https://docs.google.com/document/d/1wRBB8ufSMLI7O8_7ErAqG0JjGzs1KDU_TGjwUKBt2-U/edit)

---

## Features

- Real-time messaging from React to Arduino
- Customizable messages, colors, and light animations
- MQTT communication over secure WebSockets (`wss://`)
- Integration of software and physical hardware (NeoMatrix 8x8)

---

## Technologies Used

- React (Frontend)
- MQTT.js (Messaging)
- HiveMQ Cloud (Broker)
- Arduino Uno + ESP8266 + Adafruit NeoMatrix
- C++ (Arduino firmware)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-mqtt-arduino-dashboard.git
cd react-mqtt-arduino-dashboard
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
In the root directory of your project, create a .env file and add the following variables:

env
Copy
Edit
REACT_APP_MQTT_BROKER=wss://your-broker-url:port/mqtt
REACT_APP_MQTT_USER=your_mqtt_username
REACT_APP_MQTT_PASS=your_mqtt_password
Do not commit this file to GitHub. Ensure it's listed in .gitignore.

4. Start the development server
bash
Copy
Edit
npm start
Arduino Configuration
Rename the file secrets_example.h to secrets.h.

Replace the placeholders with your real credentials:

cpp
Copy
Edit
const char* SECRET_SSID = "your_wifi_name";
const char* SECRET_PASS = "your_wifi_password";

const char* MQTT_SERVER = "your_broker_url";
const int MQTT_PORT = 8883;

const char* MQTT_USER = "your_username";
const char* MQTT_PASSWORD = "your_password";
Important: Do not upload secrets.h to GitHub. It must be in .gitignore.

Documentation
For architecture diagrams, use cases, and configuration flow:
Full project description (Google Docs)

License
This project is licensed under the MIT License.

Acknowledgment
This README was structured with the help of ChatGPT for guidance on formatting and technical language.
Project logic and implementation were designed and implemented by the author, with support from online documentation and learning resources.

 ## Version en ESPAñOL comienza aqui. 
Panel con React, MQTT y Arduino
Este README está disponible en inglés y español.
This README is available in English and Spanish.

Resumen del Proyecto
Panel IoT construido con React y MQTT que envía datos a un Arduino para controlar una matriz LED.
Permite actualizar mensajes, colores y animaciones en tiempo real en una matriz LED 8x8 utilizando WebSockets seguros.

Más detalles aquí:
Explicación detallada del proyecto (Google Docs)

Funcionalidades
Envío de mensajes en tiempo real desde React al Arduino

Personalización de texto, color y tipo de luz

Comunicación MQTT sobre WebSockets seguros (wss://)

Integración entre software y hardware (NeoMatrix 8x8)

Tecnologías Utilizadas
React (Interfaz)

MQTT.js (Mensajería)

HiveMQ Cloud (Broker)

Arduino Uno + ESP8266 + Adafruit NeoMatrix

C++ (firmware para Arduino)

Cómo Empezar
1. Clona el repositorio
bash
Copy
Edit
git clone https://github.com/your-username/react-mqtt-arduino-dashboard.git
cd react-mqtt-arduino-dashboard
2. Instala las dependencias
bash
Copy
Edit
npm install
3. Crea el archivo .env
En la raíz del proyecto crea un archivo .env con estas variables:

env
Copy
Edit
REACT_APP_MQTT_BROKER=wss://tu-broker:puerto/mqtt
REACT_APP_MQTT_USER=tu_usuario_mqtt
REACT_APP_MQTT_PASS=tu_contraseña_mqtt
Este archivo no debe subirse a GitHub. Asegúrate de que esté listado en .gitignore.

4. Inicia el servidor de desarrollo
bash
Copy
Edit
npm start
Configuración en Arduino
Renombra secrets_example.h como secrets.h.

Llena los datos con tus credenciales reales:

cpp
Copy
Edit
const char* SECRET_SSID = "tu_wifi";
const char* SECRET_PASS = "tu_contraseña_wifi";

const char* MQTT_SERVER = "tu_broker";
const int MQTT_PORT = 8883;

const char* MQTT_USER = "tu_usuario_mqtt";
const char* MQTT_PASSWORD = "tu_contraseña_mqtt";
Importante: No subas este archivo a GitHub. Debe estar en .gitignore.

Documentación
Consulta este documento para ver diagramas, explicaciones del flujo y decisiones de diseño:
Descripción del proyecto (Google Docs)

Licencia
Este proyecto está bajo la Licencia MIT.

Créditos
Este README fue estructurado con el apoyo de ChatGPT para asegurar un formato claro y lenguaje técnico en inglés.
La lógica y el desarrollo fueron diseñados e implementados por la autora, con apoyo de documentación web y recursos de aprendizaje.
