export class StartProjectDto {
  started_at: Date;
}

// 1 caso de uso para cada campo

// nome, descricao

// preco e desconto

// class UpdateProductUseCase {
//   execute(id: string, input: { name; description; price }) {
//     const product = this.productRepo.findById(id);

//     input.name && (product.changeName = input.name);
//     input.description && (product.changeDescription = input.description);
//     input.price && (product.changePrice = input.price);

//     this.productRepo.update(product);
//   }
// }
