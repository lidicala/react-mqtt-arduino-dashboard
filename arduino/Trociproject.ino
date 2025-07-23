// #define PIN 8

#include <SoftwareSerial.h>
#include <Adafruit_GFX.h>
#include <Adafruit_NeoMatrix.h>
#include <Adafruit_NeoPixel.h>

#define PIN 8

// Usamos pines 3 (RX) y 2 (TX) en la UNO para conectar al ESP8266
SoftwareSerial Serial2(3, 2); // RX = pin 3, TX = pin 2

Adafruit_NeoMatrix matrix = Adafruit_NeoMatrix(16, 16, PIN,
  NEO_MATRIX_TOP + NEO_MATRIX_RIGHT +
  NEO_MATRIX_COLUMNS + NEO_MATRIX_PROGRESSIVE,
  NEO_GRB + NEO_KHZ800);

// Variables para almacenar los valores recibidos
int messageCode = 1;
int colorCode = 1;
int lightMode = 1;
int x = matrix.width();

void setup() {
  matrix.begin();
  matrix.setTextWrap(false);
  matrix.setBrightness(40);
  matrix.setTextColor(matrix.Color(0, 0, 255)); // Color por defecto: Azul

  Serial.begin(9600);    // Monitor Serial para debug
  Serial2.begin(9600);   // Comunicación con ESP8266
  Serial.println("Esperando datos del ESP8266...");
}

void loop() {
  // Si llegan datos desde el ESP8266
  if (Serial2.available()) {
    String input = Serial2.readStringUntil('\n');
    input.trim();

    // Formato esperado: 1,2,1
    int comma1 = input.indexOf(',');
    int comma2 = input.indexOf(',', comma1 + 1);

    if (comma1 > 0 && comma2 > comma1) {
      messageCode = input.substring(0, comma1).toInt();
      colorCode = input.substring(comma1 + 1, comma2).toInt();
      lightMode = input.substring(comma2 + 1).toInt();

      // Debug por monitor serial
      Serial.print("Mensaje: "); Serial.println(messageCode);
      Serial.print("Color: "); Serial.println(colorCode);
      Serial.print("Modo: "); Serial.println(lightMode);
    }
  }

  matrix.fillScreen(0); // Limpia la matriz

  // Color según el código recibido
  switch (colorCode) {
    case 1: matrix.setTextColor(matrix.Color(0, 0, 255)); break;  // Azul
    case 2: matrix.setTextColor(matrix.Color(255, 0, 0)); break;  // Rojo
    case 3: matrix.setTextColor(matrix.Color(0, 255, 0)); break;  // Verde
    default: matrix.setTextColor(matrix.Color(255, 255, 255)); break; // Blanco
  }

  // Posición inicial del texto
  matrix.setCursor(x, 0);

  // Texto según el mensaje recibido
  switch (messageCode) {
    case 1: matrix.print(F("Happy Birthday")); break;
    case 2: matrix.print(F("Happy New Year")); break;
    case 3: matrix.print(F("Congratulations")); break;
    default: matrix.print(F("Hello")); break;
  }

  matrix.show();

  // Efecto de scroll
  if (--x < -64) {
    x = matrix.width();
  }

  // Modo de luz
  if (lightMode == 1) {
    delay(100); // Scroll normal
  } else if (lightMode == 2) {
    delay(100);
    matrix.fillScreen(0);
    matrix.show();
    delay(100);
  }
}
