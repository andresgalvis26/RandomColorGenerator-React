import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

// Definición de un componente funcional RandomColor
const RandomColor = () => {

    // Utilización del hook useState para manejar el estado del color
    const [color, setColor] = useState('#000000');

    // Función para generar un color aleatorio
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        // Generar un color aleatorio de 6 dígitos
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]; // Construir el color aleatorio
        }
        setColor(color); // Actualizar el estado del color con el nuevo color generado
        localStorage.setItem('color', color); // Guardar el color en el localStorage
    }

    const alert = () => {
        Swal.fire({
            title: `Color: ${color} copiado al portapapeles`,
            icon: 'success',
            showConfirmButton: true,
            timer: 1500
        });
    }

    // Función para copiar el color actual al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(color)
            .then(() => alert()) // Mensaje de éxito con SweetAlert2
            .catch((error) => console.error('Error al copiar el color al portapapeles', error)); // Mensaje de error en la consola
    }

    // useEffect para recuperar el color del localStorage cuando se monta el componente
    useEffect(() => {
        localStorage.getItem('color') ? setColor(localStorage.getItem('color')) : color;
    }, [color])

    // Renderizado del componente
    return (
        <div className='h-screen w-screen flex items-center justify-center' style={{ backgroundColor: color }} >
            {/* Botón para mostrar el color actual y generar uno nuevo */}
            <button className="py-5 px-10 bg-white text-4xl font-semibold font-mono rounded-lg shadow-xl hover:bg-gray-200 transform hover:shadow-xl" style={{ color: color }} onClick={getRandomColor}>
                {color}
            </button>
            {/* Botón para copiar el color actual al portapapeles */}
            <button className="ml-5 py-5 px-10 bg-white text-4xl font-semibold font-mono rounded-lg shadow-xl hover:bg-gray-200 transform hover:rounded-lg text-white  hover:shadow-xl" style={{ color: color }} onClick={copyToClipboard}>
                Copiar
            </button>
        </div>
    )
}

// Exportar el componente RandomColor para su uso en otras partes de la aplicación
export default RandomColor;