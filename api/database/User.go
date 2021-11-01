package database

// Users table in database
type Users struct {
	tableName     struct{} `sql:"users"`
	ID            int      `sql:"id, type: serial primary key"`
	Name          string   `sql:"name, type: varchar(255) not null"`
	Gender        string   `sql:"gender, type: varchar(20)"`
	Age           int      `sql:"age, type: int"`
	Email         string   `sql:"email, type: varchar(255) not null unique"`
	ContactNumber string   `sql:"contact_number, type: varchar(15)"`
}
