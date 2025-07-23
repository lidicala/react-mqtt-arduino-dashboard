# React + MQTT + Arduino Dashboard

This README is available in English and Spanish.  
Este README está disponible en inglés y español.

---

## Project Overview

IoT dashboard built with React and MQTT to control an Arduino device. Enables real-time message, color, and animation updates on an LED matrix using secure WebSockets.

---

## Documentation
For architecture diagrams, use cases, and configuration flow:  
[Full project description (Google Docs)](https://docs.google.com/document/d/1wRBB8ufSMLI7O8_7ErAqG0JjGzs1KDU_TGjwUKBt2-U/edit)

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
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

In the root directory of your project, create a `.env` file and add the following variables(your MQTT credentials):

```env
REACT_APP_MQTT_BROKER=wss://your-broker-url:port/mqtt
REACT_APP_MQTT_USER=your_mqtt_username
REACT_APP_MQTT_PASS=your_mqtt_password
```


### 4. Start the development server

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

## Arduino Configuration

Rename the file `secrets_example.h` to `secrets.h`.

Replace the placeholders with your real credentials:

```cpp
const char* SECRET_SSID = "your_wifi_name";
const char* SECRET_PASS = "your_wifi_password";

const char* MQTT_SERVER = "your_broker_url";
const int MQTT_PORT = 8883;

const char* MQTT_USER = "your_username";
const char* MQTT_PASSWORD = "your_password";
```

Upload your Arduino sketch and connect the board. Messages from the React dashboard will update the LED matrix.

---


## License

This project is licensed under the MIT License.

---

## About this README

This README was structured with the help of ChatGPT for guidance on formatting and technical language.  
Project logic and implementation were designed and implemented by the author, with support from technical docs and learning resources.

---




# Panel con React, MQTT y Arduino

Este README está disponible en inglés y español.  
This README is available in English and Spanish.

---

## Descripción del proyecto

Panel IoT construido con React y MQTT que envía datos a un Arduino para controlar una matriz LED.  
Permite actualizar mensajes, colores y animaciones en tiempo real en una matriz LED 8x8 utilizando WebSockets seguros.

---

## Documentación

Consulta este documento para ver diagramas, explicaciones del flujo y decisiones de diseño:  
👉 [Descripción del proyecto (Google Docs)](https://docs.google.com/document/d/1wRBB8ufSMLI7O8_7ErAqG0JjGzs1KDU_TGjwUKBt2-U/edit)

---

## Funcionalidades

- Envío de mensajes en tiempo real desde React al Arduino
- Personalización de texto, color y tipo de luz
- Comunicación MQTT sobre WebSockets seguros (`wss://`)
- Integración entre software y hardware (NeoMatrix 8x8)

---

## Tecnologías Utilizadas

- React (Interfaz)
- MQTT.js (Mensajería)
- HiveMQ Cloud (Broker)
- Arduino Uno + ESP8266 + Adafruit NeoMatrix
- C++ (firmware para Arduino)

---

## Cómo Empezar

### 1. Clona el repositorio

```bash
git clone https://github.com/your-username/react-mqtt-arduino-dashboard.git
cd react-mqtt-arduino-dashboard
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura las variables de entorno

En la raíz del proyecto crea un archivo `.env` con estas variables:

```env
REACT_APP_MQTT_BROKER=wss://tu-broker:puerto/mqtt
REACT_APP_MQTT_USER=tu_usuario_mqtt
REACT_APP_MQTT_PASS=tu_contraseña_mqtt
```

### 4. Inicia el servidor de desarrollo

```bash
npm start
```

La app estará disponible en `http://localhost:3000`.

---

## Configuración en Arduino

Cambia el nombre del archivo `secrets_example.h` a `secrets.h` y escribe tus credenciales reales:

```cpp
const char* SECRET_SSID = "tu_wifi";
const char* SECRET_PASS = "tu_contraseña_wifi";

const char* MQTT_SERVER = "tu_broker";
const int MQTT_PORT = 8883;// puedes cambiar este puerto si lo necesitas
const char* MQTT_USER = "tu_usuario_mqtt";
const char* MQTT_PASSWORD = "tu_contraseña_mqtt";
```
Sube el código al Arduino y conecta la placa. Los mensajes enviados desde el dashboard se verán reflejados en la matriz LED.

---

## Licencia

Este proyecto está bajo la Licencia MIT.

---

## Créditos

Este README fue estructurado con el apoyo de ChatGPT para asegurar un formato claro y lenguaje técnico en inglés.  
La lógica y el desarrollo fueron diseñados e implementados por la autora, con apoyo de documentación técnica y recursos de aprendizaje.
