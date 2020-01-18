new Vue({
	el: '#desafio',
	data: {
		efeito: true,
		item3ClasseInformada: '',
		item4ClasseInformada: '',
		item4AplicarClasse: '',
		item5ClasseInformada: '',
		tamanho: 0
	},
	computed: {
		item4Classes() {
			return this.item4AplicarClasse == 'true' ? this.item4ClasseInformada : ''
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeito = !this.efeito
			}, 1000)
		},
		iniciarProgresso() {
			setInterval(() => {
				if (this.tamanho >= 100) {
					return false;
				}
				this.tamanho++
			}, 1000)
		}
	}
})
