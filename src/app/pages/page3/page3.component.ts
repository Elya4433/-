import { Component, OnInit } from '@angular/core';

export class Usluga {
  constructor(
    public name: string = '',
    public price: number = 0,
    public description: string = '',
    public duration: number = 0,
    public isAvailable: boolean = false,
    public category: string = '',
    public rating: number = 0
  ) {}
}


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styles: [
    `
    .search-box {
      margin-bottom: 10px;
    }
    .create-form {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .form-field {
      display: inline-block;
    }

    input[type="text"] {
      padding: 5px;
      width: 300px;
    }

    button {
      padding: 5px 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
    }

    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #f5f5f5;
    }
    `
  ]
})
export class Page3Component implements OnInit {
  products: Usluga[] = [
    new Usluga('Груминг для собак', 10, 'Комплекс процедур по уходу за шерстью, кожей, когтями, ушами и глазами собак.', 2, true, 'Категория A', 4.5),
    new Usluga('Груминг для котов', 20, 'Комплекс процедур по уходу за шерстью, кожей, когтями, ушами и глазами котовю', 3, false, 'Категория А', 4.5),
    new Usluga('Прививка от бешенства', 30, 'Вакцинация кошек вакциной Фелоцел+Рабифел. Собак вакциной Биокан DHPPi+L+Рабикс', 1.5, true, 'Категория B', 3.8),
  ];

  
  filteredProducts: Usluga[] = [];
  searchTerm: string = '';
  newProduct: Usluga = new Usluga();

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  addProduct(): void {
    this.products.push(new Usluga('Новая услуга', 0, '', 0, true, 'Категория C', 0));
    this.filterProducts();
  }

  deleteProduct(index: number): void {
    this.products.splice(index, 1);
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  createProduct(): void {
    this.products.push(new Usluga(
      this.newProduct.name,
      this.newProduct.price,
      this.newProduct.description,
      this.newProduct.duration,
      this.newProduct.isAvailable,
      this.newProduct.category,
      this.newProduct.rating
    ));
    this.newProduct = new Usluga(); // Очистить форму создания новой услуги
    this.filterProducts();
  }
  
}
