const fazerCriptografia = (texto) => {
    processoCriptografia = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    novoTexto = []
    texto.split("").map((letra) => {
        if (["a", "e", "i", "o", "u"].includes(letra)){
            return novoTexto.push(processoCriptografia[letra])
        }
        return novoTexto.push(letra)
    })
    return novoTexto.join('')
}

const fazerDescriptografia = (texto) => {
    processoDescriptografia = {
        "a": [2, "ai"],
        "e": [5, "enter"],
        "i": [4, "imes"],
        "o": [4, "ober"],
        "u": [4, "ufat"]
    }

    novoTexto = ""
    
    indiceAPular = 0

    texto.split("").map((letra, index) => {
        if (indiceAPular !== 0) {
            indiceAPular--
            return
        }
        
        if (["a", "e", "i", "o", "u"].includes(letra)){
            textoEncriptado = processoDescriptografia[letra][1]
            indiceFinal = processoDescriptografia[letra][0]

            if (texto.slice(index, (index + indiceFinal)) === textoEncriptado) {
                indiceAPular = indiceFinal - 1
                
                return novoTexto += letra
            }

            return novoTexto += letra
        }

        return novoTexto += letra
    })


    return novoTexto
}

const criptografar = () => {
    texto = document.getElementById('texto').value
    novoTexto = fazerCriptografia(texto)

    document.getElementById('textoProcessado').innerText = novoTexto
    removerImagem()
}

const descriptografar = () => {
    textoADescriptografar = document.getElementById('texto').value
    novoTexto = fazerDescriptografia(textoADescriptografar)

    document.getElementById('textoProcessado').innerText = novoTexto
}

const removerImagem = () => {
    let elementoARemover = document.getElementById('antes-do-tratamento')
    let novoTexto = document.getElementById('depois-do-tratamento')
    let texto = document.getElementById('textoProcessado').innerText
    if (texto.length !== 0 ) {
        elementoARemover.style.display = "none"
        novoTexto.style.display = "flex"
    }
}

const copiarTexto = () => {
    let texto = document.getElementById('textoProcessado').innerText 

    if (texto.length !== 0 ) {
        document.execCommand('copy')
    }
}