package database

// OrderItem table in database
type OrderItem struct {
	tableName struct{} `sql:"order_item"`
	ID        int      `sql:"id, type: serial primary key"`
	FkOrderID int      `sql:"fk_order_id, type: int not null references orders(id) on delete cascade on update cascade"`
	Qty       int      `sql:"qty, type: type: int not null"`
	Price     float64  `sql:"Price, type: numeric not null"`
	ItemSize  string   `sql:"item_size, type: varchar(30) not null"`
}
