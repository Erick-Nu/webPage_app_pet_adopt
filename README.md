# PetAdopt - Web Page

Página web para recuperación de contraseña y confirmación de email de la aplicación PetAdopt.

## 📋 Requisitos

- Node.js 14 o superior
- Cuenta en Vercel
- Proyecto de Supabase configurado

## 🚀 Despliegue en Vercel

### 1. Conectar el repositorio

1. Sube este proyecto a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Haz clic en "Import Project"
4. Selecciona tu repositorio de GitHub

### 2. Configurar Variables de Entorno

En el dashboard de Vercel, ve a **Settings → Environment Variables** y agrega:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `SUPABASE_URL` | `https://tu-proyecto.supabase.co` | URL de tu proyecto de Supabase |
| `SUPABASE_KEY` | `tu-anon-key` | Clave pública (anon/public) de Supabase |

**⚠️ Importante:** Usa la clave **anon** (pública), NO la clave `service_role`.

### 3. Deploy

Vercel desplegará automáticamente. El proyecto estará disponible en:
```
https://tu-proyecto.vercel.app
```

## 🔧 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Crear archivo .env (basado en .env.example)
cp .env.example .env

# Editar .env con tus credenciales

# Iniciar servidor
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
├── public/
│   ├── index.html           # Página principal (landing)
│   ├── reset-password.html  # Cambio de contraseña
│   ├── confirm-email.html   # Confirmación de email
│   ├── app.js              # Lógica de Supabase
│   └── styles.css          # Estilos globales
├── server.js               # Servidor Express
├── vercel.json            # Configuración de Vercel
├── .env.example           # Plantilla de variables de entorno
└── package.json           # Dependencias

```

## 🔗 Configurar en Supabase

En tu proyecto de Supabase, configura las siguientes URLs de redirección:

1. Ve a **Authentication → URL Configuration**
2. Agrega estas URLs:

**Site URL:**
```
https://tu-proyecto.vercel.app
```

**Redirect URLs:**
```
https://tu-proyecto.vercel.app/reset-password
https://tu-proyecto.vercel.app/confirm-email
io.supabase.flutter://login-callback
```

## 📧 Plantillas de Email en Supabase

### Reset Password Email Template

```
<h2>Restablecer Contraseña</h2>
<p>Haz clic en el botón para cambiar tu contraseña:</p>
<a href="{{ .SiteURL }}/reset-password?token={{ .Token }}">Cambiar Contraseña</a>
```

### Confirm Email Template

```
<h2>Confirma tu correo</h2>
<p>Haz clic aquí para confirmar:</p>
<a href="{{ .ConfirmationURL }}">Confirmar Email</a>
```

## 🛠️ Tecnologías

- Express.js
- Supabase Auth
- Vanilla JavaScript
- Vercel (Hosting)

## 📝 Notas

- Las credenciales de Supabase se pasan de forma segura desde el servidor al cliente a través del endpoint `/api/config`
- No hay credenciales hardcodeadas en el código
- El archivo `.env` está excluido del repositorio (.gitignore)

---

**PetAdopt** - Encuentra a tu compañero ideal 🐾
