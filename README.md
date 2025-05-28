<div align="center">

# 🪙 Cotizador de Criptomonedas

<p align="center">
  <img src="https://img.shields.io/badge/Estado-Activo-brightgreen?style=for-the-badge" alt="Estado del Proyecto">
  <img src="https://img.shields.io/badge/Versión-1.0.0-blue?style=for-the-badge" alt="Versión">
  <img src="https://img.shields.io/badge/Licencia-MIT-yellow?style=for-the-badge" alt="Licencia">
</p>

<p align="center">
  <strong>🚀 Una aplicación web moderna para consultar precios de criptomonedas en tiempo real</strong>
</p>

<p align="center">
  Construida con las últimas tecnologías de desarrollo frontend para ofrecer una experiencia única y profesional
</p>

<p align="center">
  <a href="#-características">Características</a> •
  <a href="#️-tecnologías-utilizadas">Tecnologías</a> •
  <a href="#-instalación-y-configuración">Instalación</a> •
  <a href="#-estructura-del-proyecto">Estructura</a> •
  <a href="#-api">API</a>
</p>

---

### 📊 En números

<p align="center">
  <img src="https://img.shields.io/badge/Criptomonedas-20+-orange?style=flat-square&logo=bitcoin" alt="Criptomonedas">
  <img src="https://img.shields.io/badge/Monedas_Fiat-Múltiples-green?style=flat-square&logo=money" alt="Monedas">
  <img src="https://img.shields.io/badge/Datos-Tiempo_Real-red?style=flat-square&logo=clock" alt="Tiempo Real">
  <img src="https://img.shields.io/badge/Responsive-100%25-blue?style=flat-square&logo=mobile" alt="Responsive">
</p>

---

</div>

## ✨ Características

- 📊 Consulta precios de las top 20 criptomonedas por capitalización de mercado
- 💱 Conversión a múltiples monedas fiat (USD, EUR, GBP, etc.)
- 📈 Visualización de datos de mercado (precio máximo/mínimo del día, cambio porcentual)
- ⚡ Actualizaciones en tiempo real
- 🎨 Interfaz moderna y responsive
- 🔒 Validación de datos con Zod
- 🏪 Gestión de estado eficiente con Zustand

## 🛠️ Tecnologías Utilizadas

### Frontend
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) **React 19.1.0** - Biblioteca de interfaz de usuario
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript 5.8.3** - Superset de JavaScript con tipado estático
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite 6.3.5** - Herramienta de construcción y servidor de desarrollo

### Gestión de Estado y Validación
- ![Zustand](https://img.shields.io/badge/Zustand-FF6B6B?style=for-the-badge&logo=zustand&logoColor=white) **Zustand 5.0.5** - Gestión de estado ligera
- ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white) **Zod 3.25.32** - Validación de esquemas TypeScript-first

### HTTP y APIs
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) **Axios 1.9.0** - Cliente HTTP
- **CryptoCompare API** - Datos de criptomonedas en tiempo real

### Herramientas de Desarrollo
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) **ESLint 9.25.0** - Linter de JavaScript/TypeScript
- ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) **npm** - Gestor de paquetes

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Clona el repositorio**
````
git clone https://github.com/AlonsoAM/CotizadorCriptoReactTs.git
cd cotizador-criptomonedas`
````

2. **Instala las dependencias**
`npm install`

3. **Inicia el servidor de desarrollo**
`npm run dev`

4. **Abre tu navegador**
http://localhost:5173

## 📁 Estructura del Proyecto
````
src/
├── components/          # Componentes React reutilizables
│   ├── CriptoSearch.tsx    # Formulario de búsqueda
│   ├── CryptoPriceDisplay.tsx # Visualización de precios
│   └── ErrorMessage.tsx    # Componente de mensajes de error
├── data/               # Datos estáticos
├── schema/             # Esquemas de validación Zod
│   └── cripto-schema.ts
├── services/           # Servicios API
│   └── CryptoService.ts
├── store/              # Gestión de estado Zustand
│   └── store.ts
├── types/              # Definiciones de tipos TypeScript
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
````

## 🌐 API
La aplicación utiliza la [CryptoCompare API](https://min-api.cryptocompare.com/) para obtener:
- **Top criptomonedas**: `/data/top/mktcapfull?limit=20&tsym=USD`
- **Precios detallados**: `/data/pricemultifull?fsyms={crypto}&tsyms={currency}`

## 🎯 Funcionalidades Principales
### 1. Selección de Criptomonedas
- Lista de las top 20 criptomonedas por capitalización de mercado
- Búsqueda y selección fácil desde dropdown

### 2. Conversión de Monedas
- Soporte para múltiples monedas fiat
- Precios actualizados en tiempo real

### 3. Información Detallada
- Precio actual
- Máximo y mínimo del día
- Cambio porcentual en 24 horas
- Última actualización
- Imagen del logo de la criptomoneda

## 🔒 Validación de Datos
El proyecto utiliza **Zod** para validar:
- Respuestas de la API
- Datos de entrada del usuario
- Esquemas de tipos TypeScript

## 🏪 Gestión de Estado
**Zustand** maneja:
- Lista de criptomonedas disponibles
- Datos de precios actuales
- Estados de carga y error
- Acciones asíncronas para APIs

## 🎨 Estilos
- CSS moderno con custom properties
- Fuente: Outfit (Google Fonts)
- Diseño responsive
- Interfaz limpia y minimalista

## 🤝 Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.


---

<div align="center">

### 💫 ¡Gracias por visitar este proyecto!

<p>
  <a href="#-cotizador-de-criptomonedas">⬆️ Volver al inicio</a> •
  <a href="https://github.com/tu-usuario/cotizador-criptomonedas/issues">🐛 Reportar Bug</a> •
  <a href="https://github.com/tu-usuario/cotizador-criptomonedas/issues">💡 Solicitar Feature</a>
</p>

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/tu-usuario)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB.svg)](https://reactjs.org/)
[![Powered by TypeScript](https://img.shields.io/badge/Powered%20by-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)

<p>
  <strong>Si este proyecto te ha sido útil, ¡no olvides darle una ⭐!</strong>
</p>

<p>
  <sub>Desarrollado con 🚀 para la comunidad de desarrolladores</sub>
</p>

---

**© 2025 Cotizador de Criptomonedas. Hecho con 💻 y ☕**

</div>
