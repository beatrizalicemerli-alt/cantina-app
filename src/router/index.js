import NotFoundView from "@/views/NotFoundView.vue"
import CardapioView from "../views/CardapioView.vue"
import { createRouter, createWebHistory } from "vue-router"
import CarrinhoView from "@/views/CarrinhoView.vue"
import PedidoView from "@/views/PedidoView.vue"
import LancheDetalheView from "@/views/LancheDetalheView.vue"

const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:
    [ 
        { path: '/', name: 'cardapio', component: CardapioView },
        {path: '/lanche/:id', name: 'lanche-detalhe', component: LancheDetalheView },
        {path: '/:pahthMatch(.*)*', name: 'nao-encontrado', component: NotFoundView },
        {path: '/carrinho', name: 'carrinho', component: CarrinhoView },
        {path: '/pedido', name: 'pedido', component: PedidoView },
     ],

})

export default router