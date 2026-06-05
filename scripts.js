function initPagamento() {
    const radios = document.querySelectorAll('input[name="pgto"]');
    const fieldsets = document.querySelectorAll('fieldset[id^="pgto-"]');

    if (!radios.length || !fieldsets.length) {
        return;
    }

    function mostrarPagamento() {
        fieldsets.forEach(fs => fs.style.display = 'none');
        const selecionado = document.querySelector('input[name="pgto"]:checked');
        if (selecionado) {
            const section = document.getElementById(`pgto-${selecionado.value}`);
            if (section) section.style.display = 'block';
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', mostrarPagamento);
    });

    mostrarPagamento();
}

function initTelebusca() {
    const telebusca = document.getElementById('telebuscasimounao');
    const simTelebusca = document.getElementById('sim-telebusca');

    if (!telebusca || !simTelebusca) {
        return;
    }

    function atualizarTelebusca() {
        simTelebusca.style.display = telebusca.value === 'sim' ? 'block' : 'none';
    }

    telebusca.addEventListener('change', atualizarTelebusca);
    atualizarTelebusca();
}

document.addEventListener('DOMContentLoaded', function () {
    initPagamento();
    initTelebusca();
});
