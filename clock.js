import { useEffect } from 'react';

export default function Clock() {
    // Define a função relogio antes de usá-la
    const relogio = () => {
        const atual = new Date();
        const hora = atual.getHours();
        const minuto = atual.getMinutes();
        const segundo = atual.getSeconds();

        const imprimirHora = `${hora} : ${minuto} : ${segundo}`;
        document.getElementById("relogioAuto").innerHTML = imprimirHora;
    };

    useEffect(() => {
        // Agora a função relogio pode ser usada aqui
        const loopRelogio = setInterval(relogio, 1000);

        relogio(); // Chamada inicial para mostrar a hora imediatamente

        return () => clearInterval(loopRelogio); // Limpeza ao desmontar o componente
    }, []);

    const mouseOver = () => {
        const relogioElement = document.getElementById("relogioAuto");
        relogioElement.style.color = "red";
        relogioElement.style.fontSize = "56px";
    };

    const mouseOut = () => {
        const relogioElement = document.getElementById("relogioAuto");
        relogioElement.style.color = "black";
        relogioElement.style.fontSize = "24px";
    };

    return (
        <div>
            <h1>Relógio</h1>
            <p 
                id="relogioAuto" 
                onMouseOver={mouseOver} 
                onMouseOut={mouseOut}
                style={{ fontSize: '24px' }}
            ></p>
        </div>
    );
}
