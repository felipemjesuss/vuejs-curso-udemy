new Vue({
    el: '#desafio',
    data: {
        nome: 'Felipe Martins',
        idade: 28,
        imagem: 'https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png'
    },
    methods: {
        idadePor3() {
            return this.idade * 3
        },
        numeroRodomico() {
            return Math.random(1);
        }
    }
})