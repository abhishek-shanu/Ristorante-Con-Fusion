package database

// MenuItem table in database
type MenuItem struct {
	tableName   struct{} `sql:"menu_item"`
	ID          int      `json:"id" sql:"id, type: int primary key"`
	Name        string   `json:"name" sql:"name, type: varchar(255) not null unique"`
	Type        string   `json:"type" sql:"type, type: varchar(255) not null"`
	Description string   `json:"description" sql:"description, type: varchar(255)"`
	Price       float64  `json:"price" sql:"price, type: numeric not null"`
	IsAvailable bool     `json:"is_available" sql:"is_available, type: bool not null"`
}
