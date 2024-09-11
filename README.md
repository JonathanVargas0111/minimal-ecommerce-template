# React + Vite
# Minimal Ecommerce Template

**Minimal Ecommerce Template** es un proyecto colaborativo que proporciona una plantilla sencilla, moderna y adaptable para tiendas en línea. Diseñada pensando en la facilidad de uso y personalización, esta plantilla está optimizada para ofrecer una experiencia de usuario fluida y centrada en el rendimiento.

## Características principales:
- **Diseño minimalista**: Estilo limpio y profesional, ideal para tiendas de cualquier tipo.
- **Responsive**: Adaptable a todos los dispositivos, desde móviles hasta pantallas de escritorio.

- **Filtros y categorías**: Permite organizar los productos y mejorar la navegación del usuario.
- **Carrito de compras dinámico**: Funcionalidad de carrito de compras en tiempo real con actualización automática.
- **Personalización flexible**: Código modular que permite modificar y adaptar el diseño y las funcionalidades con facilidad.

## Tecnologías utilizadas:
- **Frontend**: React, Css


## Recursos

Diseño base para el proyecto. Este enlace te llevará al diseño visual completo de la plantilla que servirá como referencia para la implementación.

- [Diseño ECOM template en Figma](https://www.figma.com/design/rdP9e3qjedM59DIU0QdflK/Perfect-ECOM-template?node-id=0-1&node-type=canvas&t=8C0GJMOMp8X5uL2K-0)



Para garantizar que el diseño sea adaptable a diferentes tamaños de pantalla, utilizaremos los breakpoints predeterminados de Tailwind CSS como referencia. Aunque no aplicaremos las clases de Tailwind directamente en nuestro código, los valores de estos breakpoints nos servirán para definir puntos de ajuste clave en el diseño. Los breakpoints que usaremos son:

  - **`sm`**: 640px (para dispositivos móviles pequeños)
  - **`md`**: 768px (para tablets y móviles más grandes)
  - **`lg`**: 1024px (para pantallas de tamaño mediano como laptops)
  - **`xl`**: 1280px (para pantallas grandes como monitores de escritorio)
  - **`2xl`**: 1536px (para pantallas muy grandes)

  **Cómo aplicaremos estos breakpoints:**
  - Usaremos estos valores como referencia para definir los puntos en los que el diseño debe cambiar o ajustarse.
  - Por ejemplo, podríamos establecer que ciertos estilos o elementos cambien cuando la pantalla alcance o supere el tamaño de 768px (`md`), sin usar directamente las clases de Tailwind, sino ajustando nuestros estilos CSS basados en estos tamaños.

**[Tailwind CSS - Diseño Responsive](https://tailwindcss.com/docs/responsive-design)**

**Guía para Commits y Ramas**

Para mantener un flujo de trabajo ordenado y consistente, recomendamos utilizar la siguiente plantilla para la gestión de ramas y commits:  
[Guía de Commits y Ramas en Notion](https://www.notion.so/Git-47087c9449a749d69f2c4e704a8eb7d4?pvs=4)

Esta plantilla proporciona un estándar para crear ramas y mensajes de commit, asegurando que todo el equipo siga las mismas prácticas durante el desarrollo del proyecto.

## Tecnologías y recursos a considerar:

Actualmente, el enfoque principal es la maquetación del diseño basado en el Figma proporcionado. Las siguientes tecnologías y recursos se considerarán en fases posteriores del proyecto, una vez que la maquetación esté completa y estemos listos para agregar funcionalidad y mejorar la experiencia del usuario:

- **[React Icons](https://react-icons.github.io/react-icons/)**: Librería de iconos para React con una amplia variedad de opciones. Ideal para añadir iconos a tus componentes de manera fácil y rápida.

- **[React Router](https://reactrouter.com/)**: Biblioteca para manejar la navegación en aplicaciones React de una sola página (SPA). Facilita la implementación de rutas y navegación entre diferentes páginas.

- **[Axios](https://axios-http.com/)**: Biblioteca para realizar solicitudes HTTP. Es fácil de usar y ofrece una forma sencilla de manejar solicitudes y respuestas.

- **[React Hook Form](https://react-hook-form.com/)**: Librería para manejar formularios en React de manera eficiente. Proporciona una forma sencilla de gestionar la validación y los datos de los formularios.

- **[Yup](https://github.com/jquense/yup)**: Librería para la validación de esquemas y formularios en JavaScript. Se puede usar junto con React Hook Form para validar entradas de formulario.

- **[Framer Motion](https://www.framer.com/api/motion/)**: Librería para animaciones en React. Permite crear animaciones y transiciones suaves en tus componentes.

- **[Prettier](https://prettier.io/)**: Herramienta para formatear el código de manera consistente. Ayuda a mantener el código limpio y con un formato uniforme.

- **[ESLint](https://eslint.org/)**: Herramienta para el análisis estático del código. Ayuda a identificar y corregir problemas en el código JavaScript y JSX.

Estas herramientas y librerías se integrarán en el proyecto a medida que avancemos hacia la implementación de funcionalidades y la mejora de la experiencia del usuario.



## Estructura del proyecto - Minimal E-commerce Template

```bash
minimal-ecommerce-template/
│
├── public/                # Archivos públicos accesibles directamente
│   └── index.html         # Archivo HTML principal
│   └── favicon.ico        # Icono de la página
│
├── src/                   # Código fuente del proyecto
│   ├── assets/            # Archivos estáticos como imágenes, fuentes, etc.
│   │   ├── images/        # Imágenes usadas en el proyecto
│   │   ├── fonts/         # Fuentes personalizadas
│   │   └── icons/         # Iconos SVG o PNG
│   │
│   ├── components/        # Componentes reutilizables de la UI
│   │   ├── Header/        # Componente del encabezado
│   │   │   ├── Header.js  # Archivo del componente Header
│   │   │   └── Header.css # Estilos del componente Header
│   │   ├── Footer/        # Componente del pie de página
│   │   │   ├── Footer.js  # Archivo del componente Footer
│   │   │   └── Footer.css # Estilos del componente Footer
│   │   └── ProductCard/   # Componente para mostrar productos
│   │       ├── ProductCard.js  # Archivo del componente ProductCard
│   │       └── ProductCard.css # Estilos del componente ProductCard
│   │
│   ├── pages/             # Vistas principales del proyecto (páginas completas)
│   │   ├── Home/          # Página de inicio
│   │   │   ├── Home.js    # Archivo de la página Home
│   │   │   └── Home.css   # Estilos de la página Home
│   │   ├── Product/       # Página de detalles del producto
│   │   │   ├── Product.js # Archivo de la página Product
│   │   │   └── Product.css# Estilos de la página Product
│   │   └── Cart/          # Página del carrito
│   │       ├── Cart.js    # Archivo de la página Cart
│   │       └── Cart.css   # Estilos de la página Cart
│   │
│   ├── styles/            # Estilos globales del proyecto
│   │   ├── base/          # Estilos base como reset.css, tipografía, etc.
│   │   └── utilities.css  # Clases utilitarias que pueden reutilizarse en todo el proyecto
│   │
│   └── index.js           # Archivo JavaScript principal
│
├── .gitignore             # Archivos y carpetas que Git debe ignorar
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Información general sobre el proyecto
└── LICENSE.md             # Licencia del proyecto (opcional)

```

## Contribuciones:
Este proyecto está abierto a contribuciones de la comunidad.
