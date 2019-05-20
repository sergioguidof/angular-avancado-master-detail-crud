import {InMemoryDbService} from "angular-in-memory-web-api";
import {Category} from "./pages/categories/shared/category.model";
import {Entry} from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de contas da casa"},
            {id: 2, name: "Saúde", description: "Plano de Saúde e Remédios"},
            {id: 3, name: "Lazer", description: "Cinema, parques, praia, etc"},
            {id: 4, name: "Salário", description: "Recebimento de Salário"},
            {id: 5, name: "Freelas", description: "Trabalhos como Freelancer"},
        ];

        const entries: Entry[] = [
            {id: 1, name: "Gás de Cozinha", description: "asdasda", type: "expense", amount: "80,00", date: "11/11/2018", paid: true, categoryId: categories[1].id, category: categories[1]} as Entry,
            {id: 2, name: "Gás de Cozinha", description: "asdasda", type: "revenue", amount: "80,00", date: "11/11/2018", paid: false, categoryId: categories[1].id, category: categories[1]} as Entry,
            {id: 3, name: "Gás de Cozinha", description: "asdasda", type: "expense", amount: "80,00", date: "11/11/2018", paid: true, categoryId: categories[1].id, category: categories[1]} as Entry,
        ];

        return {categories, entries}
    }
}