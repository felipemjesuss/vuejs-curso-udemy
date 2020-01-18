new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alert() {
            alert('Exibindo alerta')
        },
        keydown() {
            this.valor = event.target.value
        }
    }
})