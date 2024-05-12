import { Component, OnInit } from '@angular/core';

export class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public rating: number
  ) {}
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
    `
    /* Стили для таблицы */
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
    button {
      padding: 5px 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    /* Стили для формы */
    .form-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    .form-container input,
    .form-container textarea {
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .form-container button {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    /* Стили для поиска */
    .search-container {
      margin-bottom: 20px;
    }
    .search-container input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    `
  ]
})
export class Page2Component implements OnInit {
  products: Product[] = [
    new Product('Витамины', 10, 'Для шерсти', 4.5),
    new Product('Шампунь', 20, 'Для блестящей шерсти', 3.2),
    new Product('Корм сухой', 30, 'Холистик, с индейкой',4.0),
  ];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  addProduct(): void {
    this.products.push(new Product('Новый продукт', 0, '', 0));
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
}
