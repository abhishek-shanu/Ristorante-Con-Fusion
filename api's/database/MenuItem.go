package database

// MenuItem table in database
type MenuItem struct {
	tableName   struct{}           `sql:"menu_item"`
	ID          int                `sql:"id, type: int primary key"`
	Name        string             `sql:"name, type: varchar(255) not null unique"`
	Type        string             `sql:"type, type: varchar(255) not null"`
	Description string             `sql:"description, type: varchar(255)"`
	Price       map[string]float64 `sql:"price, type: numeric not null"`
	IsAvailable bool               `sql:"is_available, type: bool not null"`
}
