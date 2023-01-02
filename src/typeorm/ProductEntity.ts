import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn({
    name: 'product_id',
  })
  id: string;

  @Column({
    nullable: false,
    default: ""
  })
  name: string;

  @Column({
    nullable: false,
    default: ""
  })
  description: string;

  @Column({
    nullable: false
  })
  price: number;
}
