## Website Url
```bash
https://weather-app-yousay-sd.vercel.app/
```

## Getting Started
First, run the development server:

```bash
yarn
yarn run dev
```

## Environment Variables
You must create .env.local and set this variables:
```bash
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_KEY=995fa34830d87502f67630a5fa3e27c2
NEXT_PUBLIC_API=https://api.openweathermap.org/data/2.5
NEXT_PUBLIC_DEFAULT_COUNTRY=argentina
```


```
### TO DO List

✅| El proyecto debe ser construido con Next.JS.

✅| La API que se debe consumir es de https://openweathermap.org/ (Leer documentación). La API
key debe estar establecida como variable de entorno.

✅| La aplicación debe tener una ciudad predeterminada a elección del desarrollador. Debe estar
establecida como variable de entorno.

✅| Para llamar el clima actual de una ciudad se debe utilizar la API de “Current Weather Data”,
construyendo el request utilizando el nombre de las ciudades.

✅| Crear un search box para escribir el nombre de una ciudad. Al ejecutar la búsqueda se deben
mostrar los datos del clima de dicha ciudad.

⬜️| Crear test.

✅| Tener una lista de ciudades favoritas y almacenarse en local storage. Se debe poder seleccionar
una ciudad y actualizar los datos de la aplicación con el clima de dicha ciudad.

⬜️| Listar el clima para los próximos 5 días con intervalos de 3 horas utilizando la API de “5 day
weather forecast”.

⬜️| Crear un Dockerfile para la aplicación.

⬜️| Crear un pipeline con Github Actions, Gitlab CI o Jenkins. Debe ejecutar los tests, hacer el build
de la aplicación con el Dockerfile y publicar la imagen en algún registry como “Github Packages”,
“Gitlab Container Registry” o “Dockerhub”.